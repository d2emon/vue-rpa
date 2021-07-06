import Vue from 'vue';
import { MutationTree } from 'vuex';
import { Background } from '@/services/backgrounds';
import { BackgroundsState } from './state';

const mutations: MutationTree<BackgroundsState> = {
  setBackgrounds: (state: BackgroundsState, value: Background[]) => Vue
    .set(state, 'backgrounds', value),
};

export default mutations;
