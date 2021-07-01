import { Character } from '@/services/characters';

export interface CharactersState {
  characters: Character[] | null;
}

const state: CharactersState = {
  characters: null,
};

export default state;
