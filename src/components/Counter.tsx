import * as React from 'react'
import {Component} from 'react'

interface State {
  count: number
}

export default class Counter extends Component<any, State> {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={e => this.increment()}>Increment</button>
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
