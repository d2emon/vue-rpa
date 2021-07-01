import Vue from 'vue';
import { MutationTree } from 'vuex';
import { CharactersState } from './state';

const mutations: MutationTree<CharactersState> = {
  setCharacters: (state, value) => Vue.set(state, 'characters', value),
};

export default mutations;
