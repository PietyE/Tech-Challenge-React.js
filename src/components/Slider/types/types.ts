export interface Cat {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
}

export interface SliderState {
  slides: Array<Cat>;
  isLoading: boolean;
  error: string;
}

export const enum SliderActions {
  SLIDER_REQUEST_SLIDES = 'SLIDER_REQUEST_SLIDES',
  SLIDER_GET_SLIDES_SUCCESS = 'SLIDER_GET_SLIDES_SUCCESS',
  SLIDER_GET_SLIDES_ERROR = 'SLIDER_GET_SLIDES_ERROR',
}

export interface SliderRequestSlides {
  type: SliderActions.SLIDER_REQUEST_SLIDES;
}

export interface SliderGetSlidesSuccess {
  type: SliderActions.SLIDER_GET_SLIDES_SUCCESS;
  payload: Array<Cat>;
}

export interface SliderGetSlidesError {
  type: SliderActions.SLIDER_GET_SLIDES_ERROR;
  payload: string;
}

export type SliderAllActions =
  | SliderRequestSlides
  | SliderGetSlidesSuccess
  | SliderGetSlidesError;
