import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { NavState } from './state';
import { RootState } from '../../state';

const module: Module<NavState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default module;
