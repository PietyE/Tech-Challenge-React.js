import { ForkEffect, takeLatest } from 'redux-saga/effects';
import { getNewImage } from './getNewImage';
import { SliderCardActions } from '../types/types';

export function* getNewImageWatcher(): Generator<ForkEffect<never>, void> {
  yield takeLatest(SliderCardActions.GET_NEW_PICTURE_REQUEST, getNewImage);
}
