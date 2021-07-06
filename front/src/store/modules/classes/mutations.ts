import Vue from 'vue';
import { MutationTree } from 'vuex';
import { CharacterClass } from '@/services/classes';
import { ClassesState } from './state';

const mutations: MutationTree<ClassesState> = {
  setClasses: (state: ClassesState, value: CharacterClass[]) => Vue
    .set(state, 'classes', value),
};

export default mutations;
