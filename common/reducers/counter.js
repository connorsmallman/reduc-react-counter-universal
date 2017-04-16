// @flow

import type { Action } from '../actions/types';
import createReducer from '../lib/createReducer';

const initialState = 0;

export default createReducer(initialState, {
  SET_COUNTER: (counter: number, action: Action): number => 0,
  INCREMENT_COUNTER: (counter: number, action: Action): number => counter + 1,
  DECREMENT_COUNTER: (counter: number, action: Action): number => counter - 1,
});
