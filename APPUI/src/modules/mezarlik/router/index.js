export default [
    {
      path: '/mezarlik/bolge',
      name: 'mezarlik_bolge',
      component: () => import('@/modules/mezarlik/views/genel/bolge/index.vue'),
    },
    {
      path: '/sabit/butce',
      name: 'sabit_butce',
      component: () => import('@/modules/sabittanitim/views/genel/butceKod/index.vue')
    }
];
