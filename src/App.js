import React, { Component } from "react";
import TarjetaFruta from "./componentes/TarjetaFruta";
import Contador from "./componentes/Contador/Contador";
import Gato from "./componentes/Gato/Gato";

class App extends Component {
  render() {
    const otrosDatos = {
      raza: "tropical",
      peleasNocturnas: 300
    };

    return (
      <div>
        <Gato name="gato" {...otrosDatos} />
        <Contador />
        <TarjetaFruta name={"Sandia"} price={5.0}></TarjetaFruta>
      </div>
    );
  }
}
export default App;
