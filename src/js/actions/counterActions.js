import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/action-types'

// http://redux.js.org/docs/basics/Actions.html
export function increment() { // Action Creator
  return { // action
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}