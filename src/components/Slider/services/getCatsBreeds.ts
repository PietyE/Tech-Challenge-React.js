import { fetchData } from '../../../shared/services/fetchData';
import { Endpoints } from '../../../shared/constants/constants';
import type { Cat } from '../types/types';

export const getCatsBreeds = async (): Promise<Array<Cat>> => {
  return await fetchData<Array<Cat>>(Endpoints.BREEDS);
};
