import backgrounds from './races.json';

export interface Background {
  id: string;
  name: string;
}

export default {
  getBackgrounds: (): Promise<Background[]> => Promise.resolve(backgrounds),
};
