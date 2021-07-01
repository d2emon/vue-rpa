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
  getCharacters: (): Promise<Character[]> => Promise.resolve([
    {
      name: 'Персонаж',
      stats: {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
      },
      hp: 6,
      ac: 10,
      savingThrows: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
      },
      leftHand: null,
      rightHand: null,
      level: 1,

      link: '/character/name',
    },
  ]),
};
