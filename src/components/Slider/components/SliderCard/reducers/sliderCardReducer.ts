export interface SliderCardState {
  active_slide_breed: string;
}

const sliderCardState: SliderCardState = {
  active_slide_breed: '',
};

export const enum SliderCardActions {
  GET_ACTIVE_SLIDE_BREED = 'GET_ACTIVE_SLIDE_BREED',
}

export interface SliderCardGetActiveSlideBreed {
  type: SliderCardActions.GET_ACTIVE_SLIDE_BREED;
  payload: string;
}

export const sliderCardReducer = (
  state: SliderCardState = sliderCardState,
  action: SliderCardGetActiveSlideBreed,
) => {
  switch (action.type) {
    case SliderCardActions.GET_ACTIVE_SLIDE_BREED:
      return {
        ...state,
        active_slide_breed: action.payload,
      };
    default:
      return state;
  }
};
