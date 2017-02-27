module.exports = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Index',
    component: require('./view/Home.vue'),
  }
]
