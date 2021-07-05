import backgrounds from './backgrounds.json';

export interface Background {
  id: string;
  name: string;
}

export default {
  getBackgrounds: (): Promise<Background[]> => Promise.resolve(backgrounds),
};
