import { useEffect, useState } from 'react'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { menus } from '@/router/routes'
import { Item } from '@/router/index.d'


interface IHeaderProps {
  collapsed?: boolean
  setVisible?: any
}

function SiderMenu({ collapsed, setVisible }: IHeaderProps) {
  const { configStore } = useStore()
  const { t } = useTranslation()
  const navigate = useNavigate() 
  const location = useLocation()

  const [menuList]: Array<any> = useState(
    menus.map((ele) => {
      return {
        key: ele.key,
        icon: <ele.icon />,
        label: t(ele.label),
        children: ele.children?.map((item: any) => {
          return {
            path: item.path,
            key: item.key,
            label: t(item.label),
            onClick: () => navigate(item.path)
          }
        })
      }
    })
  )

  useEffect(() => {
    let activeNode = JSON.parse(localStorage.getItem('activeItem') || '{}')
    let parentNode = JSON.parse(localStorage.getItem('parentItem') || '{}')
    if (parentNode) parentNode = menuList.find((item: Item) => item.key === parentNode.key)
    menuList.forEach((ele: Item | any) => {
      let result = ele.children.find((item: Item) => item.path === location.pathname)
      if (result) {
        activeNode = result
      }
    })
    if (activeNode?.label !== undefined && activeNode?.label !== null && location.pathname !== '/') {
      configStore.switchMenuItem(activeNode)
      configStore.operateCrumbMenu(parentNode)
    }
  }, [configStore, location.pathname, menuList])


  const backHome = () => {
    configStore.crumbItem()
    navigate('/', { replace: true })
  }


  const handleClickItem: MenuProps['onClick'] = (item) => {
    let parentNode = item.keyPath[1]
    let result = menuList.find((ele: Item) => ele.key === parentNode)
    let activeNode = result?.children.find((ele: Item) => ele.key === item.key)
    configStore.operateCrumbMenu(result)
    configStore.switchMenuItem(activeNode)
    if (setVisible !== undefined) setVisible(false) 
  }

  return (
    <>
      <div className="h-16 text-center cursor-pointer overflow-hidden px-12 py-2 sm:px-6" onClick={backHome}>
      </div>
      <Menu
        theme={configStore.themeStyle}
        mode="inline"
        selectedKeys={[configStore.activeItem.key]}
        onClick={handleClickItem}
        items={menuList}
      ></Menu>
    </>
  )
}

export default observer(SiderMenu)
