import api from '@/helpers/api';

export interface CharacterClass {
  id: string;
  slug: string;
  name: string;
}

export default {
  getClasses: (): Promise<CharacterClass[]> => api.get('class')
    .then(({ data }) => data.classes)
    .then((classes) => classes),
};
