import { Dispatch } from 'redux';
import { Cat, SliderAllActions } from '../types/types';
import {
  sliderGetSlidesError,
  sliderGetSlidesSuccess,
  sliderRequestSlides,
} from '../actions/sliderActions';
import { getCatsBreeds } from './getCatsBreeds';

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
