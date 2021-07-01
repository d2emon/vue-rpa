import { ActionTree } from 'vuex';
import { NavState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<NavState, RootState> = {
  switchDrawer: ({ commit }) => commit('toggleDrawer'),
};

export default actions;
