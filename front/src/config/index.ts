import themes, { Theme } from './themes';

export interface ProjectConfig {
  iconfont?: 'mdi' | 'mdiSvg' | 'md' | 'fa' | 'fa4' | 'faSvg';
  lang?: string;
  theme?: {
    dark?: boolean;
    options?: {
      customProperties?: boolean;
    };
    themes: { [k: string]: Theme };
  };
}

const config: ProjectConfig = {
  iconfont: 'mdi',
  lang: 'ru',
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes,
  },
};

export default config;
