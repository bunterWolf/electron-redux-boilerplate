'use strict';

exports.__esModule = true;
exports.rootReducer = undefined;

var _redux = require('redux');

var _counter = require('./counter');

const rootReducer = exports.rootReducer = (0, _redux.combineReducers)({
  counterReducer: _counter.counterReducer
});