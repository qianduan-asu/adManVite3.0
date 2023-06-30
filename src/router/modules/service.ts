import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/service',
    component: Layout,
    alwayShow: true,
    meta: { title: 'message.menu.service.name', icon: 'sfont system-shequ' },
    children: [
      {
        path: 'service-1',
        component: createNameComponent(() => import('@/views/main/service/service-1.vue')),
        meta: { title: 'message.menu.service.service_1' },
      },
      {
        path: 'service-2',
        component: createNameComponent(() => import('@/views/main/service/service-2.vue')),
        meta: { title: 'message.menu.service.service_2' },
      },
      {
        path: 'service-3',
        component: createNameComponent(() => import('@/views/main/service/service-3.vue')),
        meta: { title: 'message.menu.service.service_3' },
      },
    ]
  }
]

export default route