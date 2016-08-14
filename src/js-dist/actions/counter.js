'use strict';

exports.__esModule = true;
exports.increment = increment;
exports.decrement = decrement;

var _actionTypes = require('../constants/action-types');

// http://redux.js.org/docs/basics/Actions.html
function increment() {
  // Action Creator
  return { // action
    type: _actionTypes.INCREMENT_COUNTER
  };
}

function decrement() {
  return {
    type: _actionTypes.DECREMENT_COUNTER
  };
}