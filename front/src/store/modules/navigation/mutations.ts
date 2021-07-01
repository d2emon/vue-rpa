import Vue from 'vue';
import { MutationTree } from 'vuex';
import { NavState, NavStateProperties } from './state';

const toggle = (property: NavStateProperties) => (state: NavState) => {
  console.log(`setToggle:  ${state.show}`);
  Vue.set(state, 'skip', true);
  Vue.set(state, property, !state[property]);
};

const mutations: MutationTree<NavState> = {
  setShowDrawer: (state, value) => Vue.set(state, 'show', value),
  // setImage: set('image'),
  // setColor: set('color'),
  toggleDrawer: toggle('show'),
  // toggleDrawerState
};

export default mutations;
