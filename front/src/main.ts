import Vue from 'vue';
import App from '@/App.vue';
// TODO: Add components import
// TODO: Add i18n import
import router from '@/router';
import store from '@/store';

// Plugins
// TODO: Add rest import from plugins/axios
// TODO: Add chartist import from plugins/chartist
import vuetify from '@/plugins/vuetify';

// TODO: Use rest plugin
// TODO: Sync store with router

Vue.config.productionTip = false;

new Vue({
  // TODO: Add i18n
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
