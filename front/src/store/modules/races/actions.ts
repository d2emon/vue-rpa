import { ActionTree } from 'vuex';
import racesService, { Race } from '@/services/races';
import { RacesState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<RacesState, RootState> = {
  fetchRaces: ({ commit }) => racesService
    .getRaces()
    .then((items: Race[]) => commit('setRaces', items)),
};

export default actions;
