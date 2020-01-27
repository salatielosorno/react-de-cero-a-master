import React from "react";
import TarjetaFruta from "./componentes/TarjetaFruta";
import Contador from "./componentes/Contador/Contador";

const App = () => (
  <div>
    <Contador />
    <TarjetaFruta name={"Sandia"} price={5.0}></TarjetaFruta>
  </div>
);
export default App;
