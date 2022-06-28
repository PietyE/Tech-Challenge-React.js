import { SliderActions } from '../types/types';
import type { SliderAllActions, SliderState } from '../types/types';

export const sliderState: SliderState = {
  slides: [],
  isLoading: false,
  error: '',
};

export const sliderReducer = (
  state: SliderState = sliderState,
  action: SliderAllActions,
) => {
  switch (action.type) {
    case SliderActions.SLIDER_REQUEST_SLIDES:
      return {
        ...state,
        isLoading: true,
      };
    case SliderActions.SLIDER_GET_SLIDES_SUCCESS:
      return {
        ...state,
        slides: action.payload,
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_SLIDES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
