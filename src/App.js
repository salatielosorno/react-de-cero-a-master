import React, { Component } from "react";
import Saludo from "./componentes/Saludo/Saludo";

class App extends Component {
  render() {
    return (
      <div>
        <Saludo saluda name={"Ninja"} />
      </div>
    );
  }
}
export default App;
