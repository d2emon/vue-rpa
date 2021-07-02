import { Background } from '@/services/backgrounds';

export interface BackgroundsState {
  backgrounds: Background[] | null;
}

const state: BackgroundsState = {
  backgrounds: null,
};

export default state;
