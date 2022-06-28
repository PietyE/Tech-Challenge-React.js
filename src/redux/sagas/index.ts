import { all, fork } from 'redux-saga/effects';
import { getNewImageWatcher } from '../../components/Slider/components/SliderCard/sagas/getNewImageWatcher';

export function* rootSaga() {
  yield all([fork(getNewImageWatcher)]);
}
