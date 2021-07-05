import debug from 'debug';
import config from './config';

export default (namespace: string | null = null) => debug(namespace
    ? `${config.APP_NAME}:${namespace}`
    : config.APP_NAME);
