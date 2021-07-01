import { ActionTree } from 'vuex';
import charactersService, { Character } from '@/services/characters';
import { CharactersState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<CharactersState, RootState> = {
  fetchCharacters: ({ commit }) => charactersService
    .getCharacters()
    .then((characters: Character[]) => commit('setCharacters', characters)),
};

export default actions;
