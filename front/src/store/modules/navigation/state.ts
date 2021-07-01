export type NavStateProperties = 'show' | 'skip';

export interface NavState {
  show: boolean | null;
  skip: boolean;
}

const state: NavState = {
  show: null,
  skip: false,
};

export default state;
