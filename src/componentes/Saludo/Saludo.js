import React from "react";

const Saludo = props => {
  return (
    <div>
      <div>{props.name && <strong>{props.name}</strong>}</div>
      {props.saluda ? (
        <h1>Hola, tu eres genial!</h1>
      ) : (
        <h1>Woops, ya no hay saludos para ti</h1>
      )}
    </div>
  );
};

export default Saludo;
