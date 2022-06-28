import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sliderReducer } from '../components/Slider/reducers/sliderReducer';

const reducer = combineReducers({
  slider: sliderReducer,
});

export const store = configureStore({
  reducer,
});

export type StoreState = ReturnType<typeof store.getState>;
