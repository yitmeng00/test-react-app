import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span style={{ fontSize: 20 }} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
