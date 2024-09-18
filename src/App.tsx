import { FC } from 'react'
import RouterConfig from '@/router/index'
import { useStore } from '@/store/index'
import { observer } from 'mobx-react-lite'

import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'

const App: FC = () => {
	const { configStore } = useStore()
	ConfigProvider.config({
		
		theme: configStore.theme
	})

	return (
		<ConfigProvider locale={enUS}>
			<RouterConfig />
		</ConfigProvider>
	)
}

export default observer(App)
