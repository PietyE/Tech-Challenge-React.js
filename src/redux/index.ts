import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { sliderReducer } from '../components/Slider/reducers/sliderReducer';
import { sliderCardReducer } from '../components/Slider/components/SliderCard/reducers/sliderCardReducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  slider: sliderReducer,
  sliderCard: sliderCardReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type StoreState = ReturnType<typeof store.getState>;
