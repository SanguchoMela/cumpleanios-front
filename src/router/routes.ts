import { lazy } from 'react'
import { manage } from './modules/manage' 
import { list } from './modules/list' 
import { personal } from './modules/personal' 
import { MenuItem, Item } from './index.d'
import { AppstoreOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'

interface router {
	path: string
	name: string
	component: any
	children?: Array<router>
}


export const menus: Array<MenuItem> = [
	{
		key: 'panel', 
		label: 'aside.panel.nav', 
		icon: AppstoreOutlined, 
		children: manage
	},
	{
		key: 'list',
		label: 'aside.list.nav',
		icon: UserOutlined,
		children: list
	},
	{
		key: 'personal',
		label: 'aside.personal.nav',
		icon: UnorderedListOutlined,
		children: personal
	},
	{
		key: 'logger',
		label: 'aside.logger.nav',
		icon: UnorderedListOutlined,
		children: personal
	}
]

const childRoutes: Array<Item> = []
menus.forEach((ele) => {
	ele.children?.forEach((item) => {
		item.key = item.name
	})
	childRoutes.push(...(ele as any).children)
})

const routes: Array<router> = [
	{
		path: '/login',
		name: 'login',
		component: lazy(() => import('@/pages/login/index'))
	},
	{
		path: '/',
		name: 'layout',
		component: lazy(() => import('@/pages/layout/index')),
		children: [
			{
				path: '/',
				name: 'home',
				component: lazy(() => import('@/pages/home/index'))
			},
			...(childRoutes as any)
		]
	},
	{
		path: '*',
		name: '404',
		component: lazy(() => import('@/pages/404/index'))
	}
]

export default routes
