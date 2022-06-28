import { all, fork } from 'redux-saga/effects';
import { getNewImageWatcher } from '../../components/Slider/components/SliderCard/sagas/getNewImageWatcher';
import type { AllEffect, ForkEffect } from 'redux-saga/effects';

export function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void> {
  yield all([fork(getNewImageWatcher)]);
}
