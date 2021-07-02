import Vue from 'vue';
import { MutationTree } from 'vuex';
import { BackgroundsState } from './state';

const mutations: MutationTree<BackgroundsState> = {
  setBackgrounds: (state, value) => Vue.set(state, 'backgrounds', value),
};

export default mutations;
