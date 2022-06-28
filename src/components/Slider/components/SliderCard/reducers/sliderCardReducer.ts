import { SliderCardActions } from '../types/types';
import type { SliderCardAllActions, SliderCardState } from '../types/types';

const sliderCardState: SliderCardState = {
  active_slide_breed: '',
  newPicture: '',
  isLoading: false,
  error: '',
};

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
