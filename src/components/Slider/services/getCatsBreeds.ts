import { Endpoints } from '../constants/constants';
import type { Cat } from '../types/types';
import { fetchData } from './fetchData';

export const getCatsBreeds = async (): Promise<Array<Cat>> => {
  return await fetchData<Array<Cat>>(Endpoints.BREEDS);
};
