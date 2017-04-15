// @flow

import React from 'react';
import type { Action, Dispatch, GetState } from '../actions/types';

type counterArgs = {
  increment: () => Action,
  decrement: () => Action,
  counter: number,
  incrementIfOdd: () => (dispatch: Dispatch, getState: GetState) => void,
  incrementAsync: (delay: ?number) => (dispatch: Dispatch) => void
}

const Counter = ({ increment, incrementIfOdd, incrementAsync, decrement, counter}: counterArgs) => (
  <p>
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
  </p>
)

export default Counter
