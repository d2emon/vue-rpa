import Vue from 'vue';
import { MutationTree } from 'vuex';
import { Race } from '@/services/races';
import { RacesState } from './state';

const mutations: MutationTree<RacesState> = {
  setRaces: (state: RacesState, value: Race[]) => Vue
    .set(state, 'races', value),
};

export default mutations;
