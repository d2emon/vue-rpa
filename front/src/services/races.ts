import api from '@/helpers/api';

export interface Race {
  id: string;
  slug: string;
  name: string;
}

export default {
  getRaces: (): Promise<Race[]> => api.get('race')
    .then(({ data }) => data.races)
    .then((races) => races),
};
