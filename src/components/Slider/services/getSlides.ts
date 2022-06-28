import {
  sliderGetSlidesError,
  sliderGetSlidesSuccess,
  sliderRequestSlides,
} from '../actions/sliderActions';
import { getCatsBreeds } from './getCatsBreeds';
import type { Dispatch } from 'redux';
import type { Cat, SliderAllActions } from '../types/types';

export const getSlides =
  () =>
  async (dispatch: Dispatch<SliderAllActions>): Promise<void> => {
    try {
      dispatch(sliderRequestSlides());
      const slides: Array<Cat> = await getCatsBreeds();
      dispatch(sliderGetSlidesSuccess(slides));
    } catch (error) {
      dispatch(sliderGetSlidesError((error as Error).message));
    }
  };
