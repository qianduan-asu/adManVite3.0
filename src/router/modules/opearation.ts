import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/opearation',
    component: Layout,
    alwayShow: true,
    meta: { title: 'message.menu.opearation.name', icon: 'sfont system-zidingyi' },
    children: [
      {
        path: 'opearation-1',
        component: createNameComponent(() => import('@/components/opearation/index.vue')),
        meta: { title: 'message.menu.opearation.opearation_1.name' },
        children: [
          {
            path: 'opearation-1-1',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-1/opearation-1-1.vue')),
            meta: { title: 'message.menu.opearation.opearation_1.opearation_1_1' },
          },
          {
            path: 'opearation-1-2',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-1/opearation-1-2.vue')),
            meta: { title: 'message.menu.opearation.opearation_1.opearation_1_2' },
          },
          {
            path: 'opearation-1-4',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-1/opearation-1-4.vue')),
            meta: { title: 'message.menu.opearation.opearation_1.opearation_1_4' },
          },
          {
            path: 'opearation-1-4',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-1/opearation-1-4.vue')),
            meta: { title: 'message.menu.opearation.opearation_1.opearation_1_4' },
          },
          {
            path: 'opearation-1-5',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-1/opearation-1-5.vue')),
            meta: { title: 'message.menu.opearation.opearation_1.opearation_1_5' },
          },

        ]
      },
      {
        path: 'opearation-2',
        component: createNameComponent(() => import('@/components/opearation/index.vue')),
        meta: { title: 'message.menu.opearation.opearation_2.name' },
        children: [
          {
            path: 'opearation-2-1',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-2/opearation-2-1.vue')),
            meta: { title: 'message.menu.opearation.opearation_2.opearation_2_1' },
          },
          {
            path: 'opearation-2-2',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-2/opearation-2-2.vue')),
            meta: { title: 'message.menu.opearation.opearation_2.opearation_2_2' },
          },
          {
            path: 'opearation-2-3',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-2/opearation-2-3.vue')),
            meta: { title: 'message.menu.opearation.opearation_2.opearation_2_3' },
          },
        ]
      },
      {
        path: 'opearation-3',
        component: createNameComponent(() => import('@/components/opearation/index.vue')),
        meta: { title: 'message.menu.opearation.opearation_3.name' },
        children: [
          {
            path: 'opearation-3-1',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-3/opearation-3-1.vue')),
            meta: { title: 'message.menu.opearation.opearation_3.opearation_3_1' },
          },
          {
            path: 'opearation-3-2',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-3/opearation-3-2.vue')),
            meta: { title: 'message.menu.opearation.opearation_3.opearation_3_2' },
          },
          {
            path: 'opearation-3-3',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-3/opearation-3-3.vue')),
            meta: { title: 'message.menu.opearation.opearation_3.opearation_3_3' },
          },
        ]
      },
      {
        path: 'opearation-4',
        component: createNameComponent(() => import('@/components/opearation/index.vue')),
        meta: { title: 'message.menu.opearation.opearation_4.name' },
        children: [
          {
            path: 'opearation-4-1',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-4/opearation-4-1.vue')),
            meta: { title: 'message.menu.opearation.opearation_4.opearation_4_1' },
          },
          {
            path: 'opearation-4-2',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-4/opearation-4-2.vue')),
            meta: { title: 'message.menu.opearation.opearation_4.opearation_4_2' },
          },
          {
            path: 'opearation-4-3',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-4/opearation-4-3.vue')),
            meta: { title: 'message.menu.opearation.opearation_4.opearation_4_3' },
          },
          {
            path: 'opearation-4-4',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-4/opearation-4-4.vue')),
            meta: { title: 'message.menu.opearation.opearation_4.opearation_4_4' },
          },
        ]
      },
      {
        path: 'opearation-5',
        component: createNameComponent(() => import('@/components/opearation/index.vue')),
        meta: { title: 'message.menu.opearation.opearation_5.name' },
        children: [
          {
            path: 'opearation-5-1',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-5/opearation-5-1.vue')),
            meta: { title: 'message.menu.opearation.opearation_5.opearation_5_1' },
          },
          {
            path: 'opearation-5-2',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-5/opearation-5-2.vue')),
            meta: { title: 'message.menu.opearation.opearation_5.opearation_5_2' },
          },
          {
            path: 'opearation-5-3',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-5/opearation-5-3.vue')),
            meta: { title: 'message.menu.opearation.opearation_5.opearation_5_3' },
          },
          {
            path: 'opearation-5-4',
            component: createNameComponent(() => import('@/views/main/opearation/opearation-5/opearation-5-4.vue')),
            meta: { title: 'message.menu.opearation.opearation_5.opearation_5_4' },
          },
        ]
      },
    ]
  }
]

export default route