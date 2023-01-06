import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/statistics',
    component: Layout,
    alwayShow: true,
    meta: { title: 'message.menu.statistics.name', icon: 'sfont system-xitongzhuangtai' },
    children: [
      {
        path: 'statistics-1',
        component: createNameComponent(() => import('@/views/main/statistics/statistics-1/index.vue')),
        meta: { title: 'message.menu.statistics.statistics_1' },
      },
      {
        path: 'statistics-2',
        component: createNameComponent(() => import('@/views/main/statistics/statistics-2/index.vue')),
        meta: { title: 'message.menu.statistics.statistics_2' },
      },
      {
        path: 'statistics-3',
        component: createNameComponent(() => import('@/views/main/statistics/statistics-3/index.vue')),
        meta: { title: 'message.menu.statistics.statistics_3' },
      },
      {
        path: 'statistics-4',
        component: createNameComponent(() => import('@/views/main/statistics/statistics-4/index.vue')),
        meta: { title: 'message.menu.statistics.statistics_4' },
      },
       {
        path: 'statistics-5',
        component: createNameComponent(() => import('@/views/main/statistics/statistics-5/index.vue')),
        meta: { title: 'message.menu.statistics.statistics_5' },
      },
      {
        path: 'statistics-6',
        component: createNameComponent(() => import('@/views/main/statistics/statistics-6/index.vue')),
        meta: { title: 'message.menu.statistics.statistics_6' },
      },
    ],
   
  },
  
]

export default route