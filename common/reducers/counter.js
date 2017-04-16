// @flow

import type { Action } from '../actions/types';
import createReducer from '../lib/createReducer';

const initialState = 0;

export default function countReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
