import React from "react";

const Gato = props => (
  <div>
    <h1>Gato</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
);

export default Gato;
