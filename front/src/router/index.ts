import Vue from 'vue';
import VueRouter from 'vue-router';
// TODO: Add 'vue-meta' import
// TODO: Add 'nprogress' import
// TODO: Add store import
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.BASE_URL,
  // mode: 'history',
  routes,
});

// TODO: Use meta

export default router;
