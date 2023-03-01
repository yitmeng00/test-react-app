import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement() {
    // In this function, it does not has access to this
    // Depends on how a funciton is called, this can be reference to different object
    // obj.method(); if a function is called as part of a method in an object, this will always return a reference to that object
    // function(); if the function is a standalone function without an object reference, this by default returns a reference to the iwndow object but if the strict mode is enabled this will return undefined
    console.log("Increment Clicked", this.state.count);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
