import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Comida from "./Comida";

const Comidas = (props) => {
  const listaVazia = () => props.comidas.length === 0;

  
  const adiciona = () => {
    if (novacomida === "") return;
    props.onAdiciona(novacomida);
    setComida("");
  };

  const iAdiciona = "/assets/plus1.png";

  return (
    <div className="component">
      <div className="componentHeader">
        <h1 className="componentTitle">Comidas</h1>
        <NavLink
          to="/comidas/add"
          className="buttonAdd primary"
        >
          <img src={iAdiciona} alt="adicionar" />
        </NavLink>
      </div>
      <div className="componentContent">
        <ul className={`list ${listaVazia() ? "hidden" : ""}`}>
          {props.comidas.map((t, i) => (
            <Comida
              key={t}
              comida={t}
              onAltera={props.onAltera}
              onApaga={props.onApaga}
            />
          ))}
        </ul>        
      </div>
    </div>
  );
};

export default Comidas;
