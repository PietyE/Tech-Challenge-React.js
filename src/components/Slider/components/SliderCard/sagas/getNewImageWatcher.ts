import { takeLatest } from 'redux-saga/effects';
import { SliderCardActions } from '../reducers/sliderCardReducer';
import { getNewImage } from './getNewImage';

export function* getNewImageWatcher() {
  yield takeLatest(SliderCardActions.GET_NEW_PICTURE_REQUEST, getNewImage);
}
