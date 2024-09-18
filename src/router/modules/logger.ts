import { lazy } from 'react'
export const logger = [
	{
		path: '/loggerStatus', // 状态
		name: 'loggerStatus',
		label: 'aside.logger.logger_status',
		component: lazy(() => import('@/pages/personalStatus/index'))
	}
]
