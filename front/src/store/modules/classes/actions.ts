import { ActionTree } from 'vuex';
import classService, { CharacterClass } from '@/services/classes';
import { ClassesState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<ClassesState, RootState> = {
  fetchRaces: ({ commit }) => classService
    .getClasses()
    .then((items: CharacterClass[]) => commit('setClasses', items)),
};

export default actions;
