import axios from 'axios';
import { Endpoints } from '../constants/constants';
import type { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: Endpoints.BASE,
  method: 'GET',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});
