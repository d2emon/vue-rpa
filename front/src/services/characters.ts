import api from '@/helpers/api';

export interface Character {
  name: string;
  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  hp: number;
  ac: number;
  savingThrows: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  leftHand: string | null;
  rightHand: string | null;
  level: number;

  link: string;
}

export default {
  getCharacters: (): Promise<Character[]> => api.get('character')
    .then(({ data }) => data.backgrounds)
    .then((characters) => characters),
};
