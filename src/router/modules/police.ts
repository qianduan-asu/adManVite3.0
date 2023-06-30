import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/police',
    meta: { title: 'message.menu.police.name', icon: 'sfont system-xiaoxi' },
    children: [
      {
        path: 'police',
        component: createNameComponent(() => import('@/views/main/police/index.vue')),
        meta: { title: 'message.menu.police.name'},
      },
    ]
  }
]

export default route