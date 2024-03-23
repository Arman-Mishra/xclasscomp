import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (e.target.innerText === "Increment") {
      this.setState((prev_state) => ({ count: prev_state.count + 1 }));
      return;
    }
    if (e.target.innerText === "Decrement") {
      this.setState((prev_state) => ({ count: prev_state.count - 1 }));
      return;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>
          Count: <span>{this.state.count}</span>
        </p>
        <button onClick={this.clickHandler}>Increment</button>
        <button onClick={this.clickHandler}>Decrement</button>
      </div>
    );
  }
}
