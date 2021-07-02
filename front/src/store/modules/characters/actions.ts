import { ActionTree } from 'vuex';
import charactersService, { Character } from '@/services/characters';
import { CharactersState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<CharactersState, RootState> = {
  fetchCharacters: ({ commit }) => charactersService
    .getCharacters()
    .then((items: Character[]) => commit('setCharacters', items)),
};

export default actions;
