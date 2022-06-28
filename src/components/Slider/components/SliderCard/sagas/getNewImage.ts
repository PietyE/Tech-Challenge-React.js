import { call, put } from 'redux-saga/effects';
import { getImageURL } from '../services/getImageURL';
import {
  sliderCardGetNewPictureError,
  sliderCardGetNewPictureSuccess,
} from '../actions/sliderCardActions';
import type { CallEffect, PutEffect } from 'redux-saga/effects';
import type {
  SliderCardGetNewPictureError,
  SliderCardGetNewPictureRequest,
  SliderCardGetNewPictureSuccess,
} from '../types/types';

export function* getNewImage(
  action: SliderCardGetNewPictureRequest,
): Generator<
  | CallEffect<string>
  | PutEffect<SliderCardGetNewPictureSuccess>
  | PutEffect<SliderCardGetNewPictureError>,
  void,
  string
> {
  try {
    const newImage: string = yield call(getImageURL, action.payload);
    yield put(sliderCardGetNewPictureSuccess(newImage));
  } catch (error) {
    yield put(sliderCardGetNewPictureError((error as Error).message));
  }
}
