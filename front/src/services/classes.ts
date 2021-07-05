import classes from './classes.json';

export interface CharacterClass {
  id: string;
  name: string;
}

export default {
  getClasses: (): Promise<CharacterClass[]> => Promise.resolve(classes),
};
