import Vue from 'vue';
import { MutationTree } from 'vuex';
import { ClassesState } from './state';

const mutations: MutationTree<ClassesState> = {
  setClasses: (state, value) => Vue.set(state, 'classes', value),
};

export default mutations;
