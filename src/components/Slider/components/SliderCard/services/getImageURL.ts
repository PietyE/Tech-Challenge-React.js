import { fetchData } from '../../../../../shared/services/fetchData';
import type { CatImage } from '../types/types';
import { Endpoints } from '../../../../../shared/constants/constants';

export const getImageURL = async (id: string) => {
  const data = await fetchData<Array<CatImage>>(`${Endpoints.IMAGE}${id}`);
  return data[0].url;
};
