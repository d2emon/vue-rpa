import themes, { Theme } from './themes';

export interface ProjectConfig {
  iconfont?: 'mdi' | 'mdiSvg' | 'md' | 'fa' | 'fa4' | 'faSvg';
  lang?: string;
  theme?: {
    dark?: boolean;
    themes: { [k: string]: Theme };
  };
}

const config: ProjectConfig = {
  iconfont: 'mdi',
  lang: 'ru',
  theme: {
    dark: true,
    themes,
  },
};

export default config;
