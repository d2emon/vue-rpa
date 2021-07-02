import { RouteConfig } from 'vue-router';
// import AuthLayout from '@/layouts/Auth';
// import Login from '@/views/auth/Login';
// import Register from '@/views/auth/Register';
// import ForgotPassword from '@/views/auth/ForgotPassword';
// import ResetPassword from '@/views/auth/ResetPassword';
// import i18n from '@/i18n';

const auth: RouteConfig = {
  path: '',
  redirect: 'login',
  /*
  component: AuthLayout,
  children: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: i18n.t('routes.login'),
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: i18n.t('routes.register'),
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot_password',
      component: ForgotPassword,
      meta: {
        title: i18n.t('routes.forgot_password'),
      },
    },
    {
      path: '/reset-password/:token',
      name: 'reset_password',
      component: ResetPassword,
      props: true,
      meta: {
        title: i18n.t('routes.reset_password'),
      },
    },
  ],
  */
};

export default auth;
