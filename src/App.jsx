import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cabecalho from "./componentes/Cabecalho";

import Refeicoes from "./componentes/refeicoes/Refeicoes";
import AddRefeicao from "./componentes/refeicoes/AddRefeicao";

import Comidas from "./componentes/comidas/Comidas";
import AddComida from "./componentes/comidas/AddComida";

const App = () => {
  let refs = JSON.parse(localStorage.getItem("refeicoes"));
  if (!refs) refs = [];
  const [refeicoes, setRefeicoes] = useState(refs);

  const addRefeicao = (t) => {
    setRefeicoes([...refeicoes, t]);
  }

  const alteraRefeicao = (t, d) => {
    const i = refeicoes.indexOf(t);
    const novaLista = [...refeicoes];
    novaLista[i] = d;
    setRefeicoes(novaLista);
  };

  const apagaRefeicao = (t) =>
    setRefeicoes(refeicoes.filter((tarefa) => tarefa !== t));

  useEffect(() => localStorage.setItem("refeicoes", JSON.stringify(refeicoes)));

  let comids = JSON.parse(localStorage.getItem("comidas"));
  if (!comids) comids = [];
  const [comidas, setComidas] = useState(comids);

  const addComida = (t) => {
    setComidas([...comidas, t]);
  }

  const alteraComida = (t, d) => {
    const i = comidas.indexOf(t);
    const novaLista = [...comidas];
    novaLista[i] = d;
    setComidas(novaLista);
  };

  const apagaComida = (t) =>
    setComidas(comidas.filter((tarefa) => tarefa !== t));

  useEffect(() => localStorage.setItem("comidas", JSON.stringify(comidas)));

  return (
    <div className="App">
      <Router>        
        <Cabecalho />
        <Routes>
          <Route
            path="/"
            element={
              <Refeicoes
                refeicoes={refeicoes}
                onAltera={alteraRefeicao}
                onApaga={apagaRefeicao}
              />
            }
          />

          <Route 
            path="/refeicoes/add" 
            element={
              <AddRefeicao 
                onAdiciona={addRefeicao}
              />
            } 
          />

          <Route
            path="/comidas"
            element={
              <Comidas
                comidas={comidas}
                onAltera={alteraComida}
                onApaga={apagaComida}
              />
            }
          />

          <Route 
            path="/comidas/add" 
            element={
              <AddComida 
                onAdiciona={addComida}
              />
            } 
          />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
