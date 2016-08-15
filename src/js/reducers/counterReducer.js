"use strict"
const {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} = require('../constants/action-types')


const INITIAL_STATE = {
  count: 0
}

export function counterReducer(state = INITIAL_STATE, action = { type: '' }) {
  switch (action.type) {
    
    case INCREMENT_COUNTER:
      return {...state, count: state.count + 1}

    case DECREMENT_COUNTER:
      return {...state, count: state.count - 1}

    default:
      return state;
  }
}
