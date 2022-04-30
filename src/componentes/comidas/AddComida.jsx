import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddComida = (props) => {
    const [novacomida, setComida] = useState({nome: null, qtd: null, carbo: null, prot: null, gord: null});

    const adiciona = () => {
        if (novacomida === "") return;
        props.onAdiciona(novacomida);
        setComida("");
    };
      
    return (
        <div className="component">
            <div className="componentHeader">
                <h1 className="componentTitle">Nova Comida</h1>
            </div>

            <div className="componentContent">
                <div className="field">
                    <label >Nome:</label>
                    <input
                        onBlur={(e) => novacomida.nome = e.target.value}
                        type="text"
                        autoComplete="off"
                    />
                </div>     

                <div className="field">
                    <label >Quantidade:</label>
                    <input
                        onBlur={(e) => novacomida.qtd = e.target.value}
                        type="number"
                        min="1"
                        autoComplete="off"
                    />
                </div>      

                <div className="field">
                    <label >Carboidrato:</label>
                    <input
                        onBlur={(e) => novacomida.carbo = e.target.value}
                        type="number"
                        min="1"
                        autoComplete="off"
                    />
                </div>

                <div className="field">
                    <label >Proteina:</label>
                    <input
                        onBlur={(e) => novacomida.prot = e.target.value}
                        type="number"
                        min="1"
                        autoComplete="off"
                    />
                </div>  

                <div className="field">
                    <label >Gordura:</label>
                    <input
                        onBlur={(e) => novacomida.gord = e.target.value}
                        type="number"
                        min="1"
                        autoComplete="off"
                    />
                </div>     

                <div class="buttonGroup mt1 end">
                    <NavLink
                        to="/"
                        className="buttonCanc light quarter"
                    >
                        Cancelar
                    </NavLink>

                    <NavLink
                        to="/comidas"
                        onClick={adiciona}
                        className="buttonCanc primary quarter"
                    >
                        Adicionar Comida
                    </NavLink>
                </div>
            </div> 
        </div>
    );
};

export default AddComida;
