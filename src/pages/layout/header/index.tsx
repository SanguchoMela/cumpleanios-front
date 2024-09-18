import { useState, useEffect } from 'react'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { Breadcrumb, Menu, Dropdown, Tooltip, Drawer, Avatar } from 'antd'
import { GlobalOutlined, SettingOutlined, CheckOutlined, ImportOutlined, GithubFilled } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import dark from '@/assets/icons/dark.svg'
import light from '@/assets/icons/light.svg'
import user from '@/assets/imgs/frame/user.png'

interface IHeaderProps {
	width: number
}

function HeaderNav({ width }: IHeaderProps) {
	const { configStore, basicStore } = useStore()
	const { t } = useTranslation() 
	const navigate = useNavigate() 
	const [locales, setLocales] = useState<Array<any>>(['en_US'])
	const [visible, setVisible] = useState(false) 

	useEffect(() => {
		if (localStorage.getItem('locale')) {
			setLocales([localStorage.getItem('locale')])
		}
	}, [])

	interface ILocale {
		key?: any
	}

	// Theme Style
	const themeList: Array<any> = [
		{
			en_US_name: 'Dark style',
			style: 'dark',
			icon: dark
		},
		{
			en_US_name: 'Light style',
			style: 'light',
			icon: light
		}
	]

	// Theme color
	const colorList: Array<any> = [
		{
			en_US_name: 'Dust Red',
			color: '#F5222D'
		},
		{
			en_US_name: 'Volcano',
			color: '#FA541C'
		},
		{
			en_US_name: 'Sunset Orange',
			color: '#FAAD14'
		},
		{
			en_US_name: 'Cyan',
			color: '#13C2C2'
		},
		{
			en_US_name: 'Polar Green',
			color: '#52C41A'
		},
		{
			en_US_name: 'Daybreak Blue (default)',
			color: '#1890FF'
		},
		{
			en_US_name: 'Geek Glue',
			color: '#2F54EB'
		},
		{
			en_US_name: 'Golden Purple',
			color: '#722ED1'
		}
	]

	// Log out
	const handleUserLogout = ({ key }: ILocale) => {
		if (key === 'logout') {
			basicStore.logout()
			navigate('/login', { replace: true })
		}
	}

	// User drop-down settings
	const userMenu = (
		<Menu onClick={handleUserLogout} items={[{ label: 'Admin', key: 'logout', icon: <ImportOutlined /> }]}></Menu>
	)

	return (
		<div className="flex justify-between items-center relative w-full text-black text-opacity-60">
			{/* Breadcrumb navigation */}
			<Breadcrumb>
				{configStore.activeItem?.label && width > 500 ? (
					<>
						<Breadcrumb.Item>{configStore.parentItem.label}</Breadcrumb.Item>
						<Breadcrumb.Item>{configStore.activeItem.label}</Breadcrumb.Item>
					</>
				) : (
					''
				)}
			</Breadcrumb>

			<div className="flex">
				{/* User Information  */}
				<Dropdown overlay={userMenu} placement="bottomRight">
					<div className="w-14 text-center cursor-pointer hover:bg-gray-100">
						<Avatar src={user} />
					</div>
				</Dropdown>

				{/* set up */}
				<div className="w-10 text-center cursor-pointer hover:bg-gray-100" onClick={() => setVisible(true)}>
					<SettingOutlined className="text-base" />
				</div>
			</div>

			{/* config*/}
			<Drawer width="280" placement="right" visible={visible} onClose={() => setVisible(false)} closable={false}>
				{/* style */}
				<div>
					<h3 className="text-gray-700 mb-2.5 font-semibold">{t('header.page_style')}</h3>
					<div className="flex">
						{themeList.map((item) => (
							<span
								className="relative w-12 h-10 mr-4 rounded cursor-pointer"
								key={item.style}
								onClick={() => configStore.switchStyle(item.style)}
							>
								<Tooltip
									title={item[configStore.locale + '_name']}
									color={configStore.theme.primaryColor + 'B3'}
									key={configStore.theme.primaryColor}
								>
									<img className="w-full h-full" src={item.icon} alt="" />
								</Tooltip>
								{configStore.themeStyle === item.style ? (
									<CheckOutlined
										className="absolute right-2.5 bottom-2.5"
										style={{ color: configStore.theme.primaryColor }}
									/>
								) : (
									''
								)}
							</span>
						))}
					</div>
				</div>

				{/* Theme color */}
				<div>
					<h3 className="font-semibold text-gray-700 mx-0 mt-4 mb-2.5">{t('header.theme_color')}</h3>
					<div className="flex">
						{colorList.map((item) => (
							<Tooltip title={item[configStore.locale + '_name']} color={item.color + 'B3'} key={item.color}>
								<span
									className="w-5 h-5 leading-5 text-center rounded-sm text-white mr-2 cursor-pointer flex items-center justify-center"
									style={{ background: item.color }}
									onClick={() => configStore.switchColor(item.color)}
								>
									{configStore.theme.primaryColor === item.color ? <CheckOutlined /> : ''}
								</span>
							</Tooltip>
						))}
					</div>
				</div>
			</Drawer>
		</div>
	)
}

export default observer(HeaderNav)
