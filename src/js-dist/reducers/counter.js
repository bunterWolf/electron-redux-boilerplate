"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.counterReducer = counterReducer;
const {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} = require('../constants/action-types');

const INITIAL_STATE = {
  count: 0
};

function counterReducer(state = INITIAL_STATE, action = { type: '' }) {
  switch (action.type) {

    case INCREMENT_COUNTER:
      return _extends({}, state, { count: state.count + 1 });

    case DECREMENT_COUNTER:
      return _extends({}, state, { count: state.count - 1 });

    default:
      return state;
  }
}