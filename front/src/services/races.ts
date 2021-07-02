import races from './races.json';

export interface Race {
  id: string;
  name: string;
}

export default {
  getRaces: (): Promise<Race[]> => Promise.resolve(races),
};
