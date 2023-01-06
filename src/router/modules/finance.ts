import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/finance',
    component: Layout,
    alwayShow: true,
    meta: { title: 'message.menu.finance.name', icon: 'sfont system-zidingyi' },
    children: [
      {
        path: 'finance-1',
        component: createNameComponent(() => import('@/views/main/finance/finance-1.vue')),
        meta: { title: 'message.menu.finance.finance_1' },
      },
      {
        path: 'finance-2',
        component: createNameComponent(() => import('@/views/main/finance/finance-2.vue')),
        meta: { title: 'message.menu.finance.finance_2' },
      },
      {
        path: 'finance-3',
        component: createNameComponent(() => import('@/views/main/finance/finance-3.vue')),
        meta: { title: 'message.menu.finance.finance_3' },
      },
      {
        path: 'finance-4',
        component: createNameComponent(() => import('@/views/main/finance/finance-4.vue')),
        meta: { title: 'message.menu.finance.finance_4' },
      },
      {
        path: 'finance-5',
        component: createNameComponent(() => import('@/views/main/finance/finance-5.vue')),
        meta: { title: 'message.menu.finance.finance_5' },
      },
      {
        path: 'finance-6',
        component: createNameComponent(() => import('@/views/main/finance/finance-6.vue')),
        meta: { title: 'message.menu.finance.finance_6' },
      },
      {
        path: 'finance-7',
        component: createNameComponent(() => import('@/views/main/finance/finance-7.vue')),
        meta: { title: 'message.menu.finance.finance_7' },
      },
      {
        path: 'finance-8',
        component: createNameComponent(() => import('@/views/main/finance/finance-8.vue')),
        meta: { title: 'message.menu.finance.finance_8' },
      },
      {
        path: 'finance-9',
        component: createNameComponent(() => import('@/views/main/finance/finance-9.vue')),
        meta: { title: 'message.menu.finance.finance_9' },
      },
      {
        path: 'finance-10',
        component: createNameComponent(() => import('@/views/main/finance/finance-10.vue')),
        meta: { title: 'message.menu.finance.finance_10' },
      },
    ]
  }
]

export default route