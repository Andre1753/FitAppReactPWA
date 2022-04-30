import React, { useState, useEffect } from "react";

const Comida = (props) => {
  const [comida, setComida] = useState(props.comida);
  const [altera, setAltera] = useState(false);

  useEffect(() => {
    setComida(props.comida);
  }, [props.comida]);

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
    props.onAltera(props.comidas, comida);
  };

  return altera ? (
    <main>
        <li className="field" style={estilo}>
            <div>
                <label >Comida:</label>
                <input
                    value={comida.nome}
                    onChange={(e) => {
                      comida.nome = e.target.value;
                      setComida({nome: e.target.value, qtd: comida.qtd, carbo: comida.carbo, prot: comida.prot, gord: comida.gord})
                    }}
                    type="text"
                    autoComplete="off"
                />
            </div>     

            <div>
                <label >Qtd:</label>
                <input          
                    value={comida.qtd}
                    onChange={(e) => {
                      comida.qtd = e.target.value;
                      setComida({nome: comida.nome, qtd: e.target.value, carbo: comida.carbo, prot: comida.prot, gord: comida.gord})
                    }}
                    type="number"
                    min="1"
                    autoComplete="off"
                />
            </div>  

            <div>
                <label >Carboidrato:</label>
                <input
                    value={comida.carbo}
                    onChange={(e) => {
                      comida.carbo = e.target.value;
                      setComida({nome: comida.nome, qtd: comida.qtd, carbo: e.target.value, prot: comida.prot, gord: comida.gord})
                    }}
                    type="number"
                    min="1"
                    autoComplete="off"
                />
            </div>   

            <div>
                <label >Proteina:</label>
                <input
                    value={comida.prot}
                    onChange={(e) => {
                      comida.prot = e.target.value;
                      setComida({nome: comida.nome, qtd: comida.qtd, carbo: comida.carbo, prot: e.target.value, gord: comida.gord})
                    }}
                    type="number"
                    min="1"
                    autoComplete="off"
                />
            </div>   

            <div>
                <label >Gordura:</label>
                <input
                    value={comida.gord}
                    onChange={(e) => {
                      comida.gord = e.target.value;
                      setComida({nome: comida.nome, qtd: comida.qtd, carbo: comida.carbo, prot: comida.prot, gord: e.target.value})
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
    </main>  
  ) : (
    <li style={estilo}>
      <span>Comida: {comida.nome}</span>
      <span>Qtd: {comida.qtd}g</span>
      <span>Carboidrato: {comida.carbo}g</span>
      <span>Proteina: {comida.prot}g</span>
      <span>Gordura: {comida.gord}g</span>

      <span className="buttonGroup end">
        <button className="button primary" onClick={() => setAltera(true)}>
          <img src={iAltera} alt="alterar" />
        </button>

        <button
          className="button danger"
          onClick={() => props.onApaga(props.comida)}
        >
          <img src={iApaga} alt="apagar" />
        </button>
      </span>
    </li>
  );
};

export default Comida;
