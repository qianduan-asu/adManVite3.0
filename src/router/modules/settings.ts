import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/settings',
    component: Layout,
    alwayShow: true,
    meta: { title: 'message.menu.settings.name', icon: 'sfont system-component' },
    children: [
      {
        path: 'settings-1',
        component: createNameComponent(() => import('@/components/settings/index.vue')),
        meta: { title: 'message.menu.settings.settings_1.name' },
        children: [
          {
            path: 'settings-1-1',
            component: createNameComponent(() => import('@/views/main/settings/settings-1/settings-1-1.vue')),
            meta: { title: 'message.menu.settings.settings_1.settings_1_1' },
          },
        ]
      },
      {
        path: 'settings-2',
        component: createNameComponent(() => import('@/components/settings/index.vue')),
        meta: { title: 'message.menu.settings.settings_2.name' },
        children: [
          {
            path: 'settings-2-1',
            component: createNameComponent(() => import('@/views/main/settings/settings-2/settings-2-1.vue')),
            meta: { title: 'message.menu.settings.settings_2.settings_2_1' },
          },
          {
            path: 'settings-2-2',
            component: createNameComponent(() => import('@/views/main/settings/settings-2/settings-2-2.vue')),
            meta: { title: 'message.menu.settings.settings_2.settings_2_2' },
          },
          {
            path: 'settings-2-3',
            component: createNameComponent(() => import('@/views/main/settings/settings-2/settings-2-3.vue')),
            meta: { title: 'message.menu.settings.settings_2.settings_2_3' },
          },
          {
            path: 'settings-2-4',
            component: createNameComponent(() => import('@/views/main/settings/settings-2/settings-2-4.vue')),
            meta: { title: 'message.menu.settings.settings_2.settings_2_4' },
          },
          {
            path: 'settings-2-5',
            component: createNameComponent(() => import('@/views/main/settings/settings-2/settings-2-5.vue')),
            meta: { title: 'message.menu.settings.settings_2.settings_2_5' },
          },
        ]
      },
      {
        path: 'settings-3',
        component: createNameComponent(() => import('@/components/settings/index.vue')),
        meta: { title: 'message.menu.settings.settings_3.name' },
        children: [
          {
            path: 'settings-3-1',
            component: createNameComponent(() => import('@/views/main/settings/settings-3/settings-3-1.vue')),
            meta: { title: 'message.menu.settings.settings_3.settings_3_1' },
          },
          {
            path: 'settings-3-2',
            component: createNameComponent(() => import('@/views/main/settings/settings-3/settings-3-2.vue')),
            meta: { title: 'message.menu.settings.settings_3.settings_3_2' },
          },
          {
            path: 'settings-3-3',
            component: createNameComponent(() => import('@/views/main/settings/settings-3/settings-3-3.vue')),
            meta: { title: 'message.menu.settings.settings_3.settings_3_3' },
          },
        ]
      },
    ]
  }
]

export default route