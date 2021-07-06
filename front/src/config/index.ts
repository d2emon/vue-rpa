import themes, { Theme } from './themes';

export interface ProjectConfig {
  api: {
    baseURL?: string;
    timeout?: number;
  };
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
  api: {
    baseURL: 'http://127.0.0.1:5000/api/v1.0/',
    timeout: 1000,
  },
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
