import { ActionTree } from 'vuex';
import backgroundsService, { Background } from '@/services/backgrounds';
import { BackgroundsState } from './state';
import { RootState } from '../../state';

const actions: ActionTree<BackgroundsState, RootState> = {
  fetchBackgrounds: ({ commit }) => backgroundsService
    .getBackgrounds()
    .then((items: Background[]) => commit('setBackgrounds', items)),
};

export default actions;
