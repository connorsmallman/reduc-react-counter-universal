// @flow

type Set =  { type: 'SET_COUNTER', payload: number };
type Increment = { type: 'INCREMENT_COUNTER' };
type Decrement = { type: 'DECREMENT_COUNTER' };

export type Action = Set
  | Increment
  | Decrement;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
