import React, { Component } from "react";

class Child extends Component {
  manejadorClick = () => {
    this.props.onSaluda("Ninja en React");
  };
  render() {
    return (
      <div className="box blue">
        <h2>Child</h2>
        <button onClick={this.manejadorClick}>Saluda</button>
      </div>
    );
  }
}

export default Child;
