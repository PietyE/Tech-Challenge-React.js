export interface CatImage {
  url: string;
}

export interface SliderCardState {
  active_slide_breed: string;
  newPicture: string;
  isLoading: false;
  error: string;
}

export const enum SliderCardActions {
  GET_ACTIVE_SLIDE_BREED = 'GET_ACTIVE_SLIDE_BREED',
  GET_NEW_PICTURE_REQUEST = 'GET_NEW_PICTURE_REQUEST',
  GET_NEW_PICTURE_SUCCESS = 'GET_NEW_PICTURE_SUCCESS',
  GET_NEW_PICTURE_ERROR = 'GET_NEW_PICTURE_ERROR',
}

export interface SliderCardGetActiveSlideBreed {
  type: SliderCardActions.GET_ACTIVE_SLIDE_BREED;
  payload: string;
}

export interface SliderCardGetNewPictureRequest {
  type: SliderCardActions.GET_NEW_PICTURE_REQUEST;
  payload: string;
}

export interface SliderCardGetNewPictureSuccess {
  type: SliderCardActions.GET_NEW_PICTURE_SUCCESS;
  payload: string;
}

export interface SliderCardGetNewPictureError {
  type: SliderCardActions.GET_NEW_PICTURE_ERROR;
  payload: string;
}

export type SliderCardAllActions =
  | SliderCardGetNewPictureError
  | SliderCardGetNewPictureSuccess
  | SliderCardGetNewPictureRequest
  | SliderCardGetActiveSlideBreed;
