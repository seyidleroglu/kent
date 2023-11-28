export default [
    {
      path: '/sabit/bolge',
      name: 'sabit_bolge',
      component: () => import('@/modules/sabittanitim/views/genel/bolge/index.vue'),
    },
    {
      path: '/sabit/butce',
      name: 'sabit_butce',
      component: () => import('@/modules/sabittanitim/views/genel/butceKod/index.vue')
    }
];
