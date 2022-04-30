import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Refeicao from "./Refeicao";

const Refeicoes = (props) => {
  const listaVazia = () => props.refeicoes.length === 0;

  const iAdiciona = "/assets/plus1.png";

  return (
    <div className="component">
      <div className="componentHeader">
        <h1 className="componentTitle">Refeições</h1>
        <NavLink
          to="/refeicoes/add"
          className="buttonAdd primary"
        >
          <img src={iAdiciona} alt="adicionar" />
        </NavLink>
      </div>
      <div className="componentContent">
        <ul className={`list ${listaVazia() ? "hidden" : ""}`}>
          {props.refeicoes.map((t, i) => (
            <Refeicao
              key={t}
              refeicao={t}
              onAltera={props.onAltera}
              onApaga={props.onApaga}
            />
          ))}
        </ul>        
      </div>
    </div>
  );
};

export default Refeicoes;
