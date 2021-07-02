// import Vue from 'vue';
import { RouteConfig } from 'vue-router';
// import AdminLayout from '@/components/layouts/Admin';
// import Dashboard from '@/components/views/Dashboard';
// import Profile from '@/components/views/Profile';
// import Error from '@/components/views/Error';
// import i18n from '@/i18n';

/**
 * Error component
 */
// Vue.component('Error', Error);

const admin: RouteConfig = {
  path: '',
  /*
  component: AdminLayout,
  meta: {
    title: i18n.t('routes.home'),
  },
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: i18n.t('routes.dashboard'),
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: i18n.t('routes.profile'),
      },
    },
    {
      path: '*',
      component: Error,
      meta: {
        title: i18n.t('routes.not_found'),
      },
    },
  ],
   */
};

export default admin;
