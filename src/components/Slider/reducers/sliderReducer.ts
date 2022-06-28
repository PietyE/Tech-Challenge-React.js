import { SliderAllActions, SliderState } from '../types/types';

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
    default:
      return state;
  }
};
