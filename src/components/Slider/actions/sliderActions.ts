import { SliderActions } from '../types/types';
import type {
  Cat,
  SliderGetSlidesError,
  SliderGetSlidesSuccess,
  SliderRequestSlides,
} from '../types/types';

export const sliderRequestSlides = (): SliderRequestSlides => ({
  type: SliderActions.SLIDER_REQUEST_SLIDES,
});
export const sliderGetSlidesSuccess = (
  slides: Array<Cat>,
): SliderGetSlidesSuccess => ({
  type: SliderActions.SLIDER_GET_SLIDES_SUCCESS,
  payload: slides,
});
export const sliderRequestError = (error: string): SliderGetSlidesError => ({
  type: SliderActions.SLIDER_GET_SLIDES_ERROR,
  payload: error,
});
