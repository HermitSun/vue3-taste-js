export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/TodoList.vue')
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: () => import('@/views/Watcher.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
