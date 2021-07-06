import axios, { AxiosInstance } from 'axios';
import config from '@/config';

const api: AxiosInstance = axios.create(config.api);

export default api;
