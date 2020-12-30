import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <div>
          <div>
            <h3>Count:{count}</h3>

          </div>
          <div>
            <button onClick={this.incrementCount}>+1</button>
            <button onClick={this.resetCount}>reset</button>
            <button onClick={this.decrementCount}>-1</button>
          </div>
        </div>
      </div>
    );
  }
}
