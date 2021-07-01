import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import actions from './actions';
import getters from './getters';
import modules from './modules';
import mutations from './mutations';
import state, { RootState } from './state';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  actions,
  getters,
  modules,
  mutations,
  state,
};

export default new Vuex.Store<RootState>(store);
