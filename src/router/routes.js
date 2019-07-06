export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/App.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
