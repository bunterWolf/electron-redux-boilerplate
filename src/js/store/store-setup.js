import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// import logger from './logger'
import {rootReducer} from '../reducers/reducerIndex'
import {calulateCounter} from '../actions/counterActions'

// import promiseMiddleware from '../middleware/promise-middleware'

export function storeSetup(initialState) {

const store = createStore(
  rootReducer,
  initialState,
  compose(getMiddleware(), window.devToolsExtension())
)
  return store;
}

function getMiddleware() {
  let middleware = [
    // promiseMiddleware,
    thunk
  ];

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware];
  }

  return applyMiddleware(...middleware);
}
