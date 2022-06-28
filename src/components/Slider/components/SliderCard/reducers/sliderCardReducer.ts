export interface SliderCardState {
  active_slide_breed: string;
  newPicture: string;
  isLoading: false;
  error: string;
}

const sliderCardState: SliderCardState = {
  active_slide_breed: '',
  newPicture: '',
  isLoading: false,
  error: '',
};

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

export const sliderCardReducer = (
  state: SliderCardState = sliderCardState,
  action: SliderCardAllActions,
) => {
  switch (action.type) {
    case SliderCardActions.GET_ACTIVE_SLIDE_BREED:
      return {
        ...state,
        active_slide_breed: action.payload,
      };
    case SliderCardActions.GET_NEW_PICTURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SliderCardActions.GET_NEW_PICTURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newPicture: action.payload,
      };
    case SliderCardActions.GET_NEW_PICTURE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
