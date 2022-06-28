import { call, put } from 'redux-saga/effects';
import {
  sliderCardGetNewPictureError,
  SliderCardGetNewPictureRequest,
  sliderCardGetNewPictureSuccess,
} from '../reducers/sliderCardReducer';
import { getImageURL } from '../services/getImageURL';

export function* getNewImage(action: SliderCardGetNewPictureRequest) {
  try {
    const newImage: string = yield call(getImageURL, action.payload);
    yield put(sliderCardGetNewPictureSuccess(newImage));
  } catch (error) {
    yield put(sliderCardGetNewPictureError((error as Error).message));
  }
}
