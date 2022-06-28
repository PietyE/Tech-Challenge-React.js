import axios, { AxiosInstance } from 'axios';
import { Endpoints } from '../constants/constants';

export const api: AxiosInstance = axios.create({
  baseURL: Endpoints.BASE,
  method: 'GET',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});
