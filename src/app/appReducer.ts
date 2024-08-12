import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/entities/counter/model/counterSlice.ts';
import textsReducer from '@/entities/dump-text/model/textsSlice.ts';

export const rootReducer = combineReducers({
  counter: counterReducer,
  texts: textsReducer,
});
