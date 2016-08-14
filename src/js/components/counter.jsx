"use strict"
import React from 'react'
import { increment, decrement } from '../actions/counter'
import { connect } from 'react-redux'

@connect((state) => {
  return {
    count: state.counterReducer.count
  }
})
export class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    console.log(this.props)
  }

  inc = () => {this.props.dispatch(increment())}
  dec = () => {this.props.dispatch(decrement())}

  render() {

    return(
      <div>
        <div>Counter {this.props.count}</div>
        <button onClick={this.inc} > + </button>
        <button onClick={this.dec} > - </button>
      </div>
    )
  }
}
