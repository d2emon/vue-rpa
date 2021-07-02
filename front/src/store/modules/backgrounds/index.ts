import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { BackgroundsState } from './state';
import { RootState } from '../../state';

const module: Module<BackgroundsState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default module;
