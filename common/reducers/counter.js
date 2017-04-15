// @flow
import type { Action } from '../actions/types';
import type { State } from '../containers/types';

const counter = (state: State = 0, action: Action): State => {
  switch (action.type) {
    case 'SET_COUNTER':
      return action.payload;
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'DECREMENT_COUNTER':
      return state - 1;
    default:
      return state;
  }
}

export default counter;
