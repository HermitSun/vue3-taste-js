export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/TodoList.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('@/views/Lifecycle.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: () => import('@/views/Watcher.vue')
  },
  {
    path: '/this-and-refs',
    name: 'ThisAndRefs',
    component: () => import('@/views/ThisAndRefs.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
