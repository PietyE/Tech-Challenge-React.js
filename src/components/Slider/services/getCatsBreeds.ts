import { fetchData } from '../../../shared/services/fetchData';
import { Endpoints } from '../../../shared/constants/constants';
import type { Cat } from '../types/types';

export const getCatsBreeds = async (): Promise<Array<Cat>> =>
  await fetchData<Array<Cat>>(Endpoints.BREEDS);
