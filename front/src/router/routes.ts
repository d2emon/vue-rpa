import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    /*
    meta: {
      name: 'dashboard-view',
      requiresAuth: false,
    },
     */
    component: () => import('@/components/views/DashboardView.vue'),
    children: [
      {
        path: '',
        /*
        meta: {
          name: 'Dashboard',
        },
         */
        component: () => import('@/components/dashboard/Dashboard.vue'),
      },
    ],
  },
];

export default routes;
