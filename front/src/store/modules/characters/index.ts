import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { CharactersState } from './state';
import { RootState } from '../../state';

const module: Module<CharactersState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default module;
