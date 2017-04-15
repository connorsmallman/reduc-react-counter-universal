// @flow
import type { Action } from '../actions/types';
import createReducer from '../lib/createReducer';
import type { State } from './types';

const initialState = 0;

export default createReducer(initialState, {
  SET_COUNTER: (state: State, action: Action): State => 0,
  INCREMENT_COUNTER: (state: State, action: Action): State => state + 1,
  DECREMENT_COUNTER: (state: State, action: Action): State => state - 1,
});
