import Vue from 'vue';
import { MutationTree } from 'vuex';
import { RacesState } from './state';

const mutations: MutationTree<RacesState> = {
  setRaces: (state, value) => Vue.set(state, 'races', value),
};

export default mutations;
