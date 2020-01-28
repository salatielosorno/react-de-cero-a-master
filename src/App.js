import React, { Component } from "react";
import Child from "./componentes/Child/Child";
import "./global.css";

class App extends Component {
  state = {
    name: ""
  };
  manejador = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="box red">
        <Child onSaluda={this.manejador} />
        <h1>Nombre: {this.state.name}</h1>
      </div>
    );
  }
}
export default App;
