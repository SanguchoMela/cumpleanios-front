import React, { useState, Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'
import { Layout, Drawer } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import SiderMenu from './sider/index'
import HeaderNav from './header/index'

const { Header, Content, Sider } = Layout

function LayoutConfig() {
  const { configStore } = useStore()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const toggle = () => {
    if (width > 650) setCollapsed(!collapsed)
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const backHome = () => {
    configStore.crumbItem()
    navigate('/', { replace: true })
  }

  window.onresize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    width < 650 ? setCollapsed(true) : setCollapsed(false)
  }, [width])

  useEffect(() => {
    configStore.watchCollapsed(collapsed)
  }, [collapsed])

  return (
    <Layout className="h-full select-none">
      {width < 650 ? (
        <Drawer
          placement="left"
          width="80%"
          visible={visible}
          onClose={onClose}
          closable={false}
          bodyStyle={{ padding: 0 }}
        >
          <Sider
            collapsedWidth={0}
            theme={configStore.themeStyle}
            trigger={null}
            className="cs-aside !w-full h-full !max-w-none"
          >
            <SiderMenu setVisible={setVisible} />
          </Sider>
        </Drawer>
      ) : (
        <Sider
          width="230"
          theme={configStore.themeStyle}
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="cs-aside"
        >
          <SiderMenu collapsed={collapsed} />
        </Sider>
      )}
      <Layout>
        <Header className="flex items-center !bg-white shadow-box !p-0">
          {width < 650 ? (
            <span className="w-24 h-full text-center cursor-pointer px-5 py-2" onClick={backHome}>
              
            </span>
          ) : (
            ''
          )}
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className:
              '!flex items-center h-full py-0 px-6 cursor-pointer transition-color duration-300 text-gray-500 mr-2.5 text-base hover:bg-gray-100',
            onClick: toggle
          })}
          <HeaderNav width={width} />
        </Header>
        <Content
          style={{
            padding: width < 650 ? '0 4px 4px' : '4px 10px 10px',
            marginTop: width < 650 ? 4 : 6,
            minHeight: 280,
            overflow: 'auto',
            position: 'relative'
          }}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default observer(LayoutConfig)
