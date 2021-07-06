import api from '@/helpers/api';

export interface Background {
  id: string;
  slug: string;
  name: string;
}

export default {
  getBackgrounds: (): Promise<Background[]> => api.get('background')
    .then(({ data }) => data.backgrounds)
    .then((backgrounds) => backgrounds),
};
