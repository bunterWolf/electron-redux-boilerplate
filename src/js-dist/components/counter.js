"use strict";

exports.__esModule = true;
exports.Counter = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _counter = require('../actions/counter');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Counter = exports.Counter = (_dec = (0, _reactRedux.connect)(state => {
  return {
    count: state.counterReducer.count
  };
}), _dec(_class = class Counter extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.inc = () => {
      this.props.dispatch((0, _counter.increment)());
    };

    this.dec = () => {
      this.props.dispatch((0, _counter.decrement)());
    };

    this.state = {};
    console.log(this.props);
  }

  render() {

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        'Counter ',
        this.props.count
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.inc },
        ' + '
      ),
      _react2.default.createElement(
        'button',
        { onClick: this.dec },
        ' - '
      )
    );
  }
}) || _class);