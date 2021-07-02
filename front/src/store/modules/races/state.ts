import { Race } from '@/services/races';

export interface RacesState {
  races: Race[] | null;
}

const state: RacesState = {
  races: null,
};

export default state;
