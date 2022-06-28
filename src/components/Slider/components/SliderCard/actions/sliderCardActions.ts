import { SliderCardActions } from '../types/types';
import type {
  SliderCardGetActiveSlideBreed,
  SliderCardGetNewPictureError,
  SliderCardGetNewPictureRequest,
  SliderCardGetNewPictureSuccess,
} from '../types/types';

export const sliderCardGetActiveSlideBreed = (
  id: string,
): SliderCardGetActiveSlideBreed => ({
  type: SliderCardActions.GET_ACTIVE_SLIDE_BREED,
  payload: id,
});

export const sliderCardGetNewPictureRequest = (
  id: string,
): SliderCardGetNewPictureRequest => ({
  type: SliderCardActions.GET_NEW_PICTURE_REQUEST,
  payload: id,
});

export const sliderCardGetNewPictureSuccess = (
  id: string,
): SliderCardGetNewPictureSuccess => ({
  type: SliderCardActions.GET_NEW_PICTURE_SUCCESS,
  payload: id,
});

export const sliderCardGetNewPictureError = (
  id: string,
): SliderCardGetNewPictureError => ({
  type: SliderCardActions.GET_NEW_PICTURE_ERROR,
  payload: id,
});
