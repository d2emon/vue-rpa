import { CharacterClass } from '@/services/classes';

export interface ClassesState {
  classes: CharacterClass[] | null;
}

const state: ClassesState = {
  classes: null,
};

export default state;
