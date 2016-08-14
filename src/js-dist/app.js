'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _counter = require('./components/counter');

var _reactRedux = require('react-redux');

var _configureStore = require('./store/configure-store');

var _devtoolsSetup = require('./tools/devtools-setup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV !== 'production') {
  // execute window.devToolsSetup() on the developer console to install them
  window.devToolsSetup = _devtoolsSetup.DevToolsSetup;
  require('electron-connect').client.create();
}

const store = (0, _configureStore.configureStore)({});

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_counter.Counter, null)
), document.getElementById('app'));