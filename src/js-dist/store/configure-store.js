'use strict';

exports.__esModule = true;
exports.configureStore = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _root = require('../reducers/root');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import promiseMiddleware from '../middleware/promise-middleware'

function configureStore(initialState) {

  // http://redux.js.org/docs/api/compose.html kapier ich nicht
  const store = (0, _redux.compose)(_getMiddleware())(_redux.createStore)(_root.rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f);
  return store;
}
// import logger from './logger'


function _getMiddleware() {
  let middleware = [
  // promiseMiddleware,
  _reduxThunk2.default];

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware];
  }

  return (0, _redux.applyMiddleware)(...middleware);
}