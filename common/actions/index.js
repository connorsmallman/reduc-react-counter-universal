// @flow
import type { Action, Dispatch, GetState } from './types';

export const set = (value: number): Action => ({
  type: 'SET_COUNTER',
  payload: value
});

export const increment = (): Action => ({
  type: 'INCREMENT_COUNTER'
});

export const decrement = (): Action => ({
  type: 'DECREMENT_COUNTER'
})

export const incrementIfOdd = () => (dispatch: Dispatch, getState: GetState): void => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
}

export const incrementAsync = (delay: number = 1000) => (dispatch: Dispatch): void => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
}
