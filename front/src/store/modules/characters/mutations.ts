import Vue from 'vue';
import { MutationTree } from 'vuex';
import { Character } from '@/services/characters';
import { CharactersState } from './state';

const mutations: MutationTree<CharactersState> = {
  setCharacters: (state: CharactersState, value: Character[]) => Vue
    .set(state, 'characters', value),
};

export default mutations;
