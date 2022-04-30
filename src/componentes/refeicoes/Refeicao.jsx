import React, { useState, useEffect } from "react";

const Refeicao = (props) => {
  const [refeicao, setRefeicao] = useState(props.refeicao);
  const [altera, setAltera] = useState(false);

  useEffect(() => {
    setRefeicao(props.refeicao);
  }, [props.refeicao]);

  // Outros dados
  const iAltera = "./assets/edit1.png";
  const iApaga = "./assets/delete1.png";
  const iCheck = "./assets/check.png"
  const estilo = {
    height: "2.7rem", 
  };

  // Funções para tratamento dos eventos
  const confirma = (e) => {
    setAltera(false);
    props.onAltera(props.refeicao, refeicao);
  };

  return altera ? (
    <li className="field" style={estilo}>
      <div className="field">
          <label >Horario:</label>
          <input
              value={refeicao.horario}
              onChange={(e) => {
                refeicao.horario = e.target.value;
                setRefeicao({horario: e.target.value, nome: refeicao.nome, qtd: refeicao.qtd})
              }}
              type="datetime-local"
              autoComplete="off"
          />
      </div>     

      <div className="field">
          <label >Comida:</label>
          <input          
              value={refeicao.nome}
              onChange={(e) => {
                refeicao.nome = e.target.value;
                setRefeicao({horario: refeicao.horario, nome: e.target.value, qtd: refeicao.qtd})
              }}
              type="text"
              autoComplete="off"
          />
      </div>      

      <div className="field">
          <label >Qtd:</label>
          <input
              value={refeicao.qtd}
              onChange={(e) => {
                refeicao.qtd = e.target.value;
                setRefeicao({horario: refeicao.horario, nome: refeicao.nome, qtd: e.target.value})
              }}
              type="number"
              min="1"
              autoComplete="off"
          />
      </div>   
              
      <button
        className="button primary"
        onClick={() => confirma()}
      >
        <img src={iCheck} alt="alterar" />
      </button>

    </li>
  ) : (
    <li style={estilo}>
      <span>Horário: {refeicao.horario}</span>
      <span>Comida: {refeicao.nome}</span>
      <span>Quantidade: {refeicao.qtd}</span>
      <span className="buttonGroup end">
        <button className="button primary" onClick={() => setAltera(true)}>
          <img src={iAltera} alt="alterar" />
        </button>

        <button
          className="button danger"
          onClick={() => props.onApaga(props.refeicao)}
        >
          <img src={iApaga} alt="apagar" />
        </button>
      </span>
    </li>
  );
};

export default Refeicao;
