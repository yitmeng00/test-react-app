import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
        <h1>Hello World</h1>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return html expression is allowed
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
