import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/workOrder',
    component: Layout,
    alwayShow: true,
    meta: { title: 'message.menu.workOrder.name', icon: 'sfont system-24gl-printer' },
    children: [
      {
        path: 'workOrder-1',
        component: createNameComponent(() => import('@/components/workorder/index.vue')),
        alwayShow: true,
        meta: { title: 'message.menu.workOrder.workOrder_1.name' },
        children: [
          {
            path: 'workOrder-1-1',
            component: createNameComponent(() => import('@/views/main/workOrder/workOrder-1/workOrder-1-1.vue')),
            meta: { title: 'message.menu.workOrder.workOrder_1.workOrder_1_1' },
          },
        ]
      },
    ]
  }
]

export default route