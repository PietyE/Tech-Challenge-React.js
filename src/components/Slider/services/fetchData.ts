import { api } from './api';
import type { AxiosResponse } from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse = await api(url);
  return response.data;
};
