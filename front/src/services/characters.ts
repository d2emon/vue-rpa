import characters from './characters.json';

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
  getCharacters: (): Promise<Character[]> => Promise.resolve(characters),
};
