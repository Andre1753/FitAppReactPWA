import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddRefeicao = (props) => {
    const [novaRefeicao, setRefeicao] = useState({horario: null, nome: null, qtd: null});

    const adiciona = () => {
        if (novaRefeicao === "") return;
        props.onAdiciona(novaRefeicao);
        setRefeicao("");
    };
      
    return (
        <div className="component">
            <div className="componentHeader">
                <h1 className="componentTitle">Nova Refeição</h1>
            </div>

            <div className="componentContent">
                <div className="field">
                    <label >Horario:</label>
                    <input
                        onBlur={(e) => novaRefeicao.horario = e.target.value}
                        type="datetime-local"
                        autoComplete="off"
                    />
                </div>     

                <div className="field">
                    <label >Comida:</label>
                    <input
                        onBlur={(e) => novaRefeicao.nome = e.target.value}
                        type="text"
                        autoComplete="off"
                    />
                </div>      

                <div className="field">
                    <label >Qtd:</label>
                    <input
                        onBlur={(e) => novaRefeicao.qtd = e.target.value}
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
                        to="/"
                        onClick={adiciona}
                        className="buttonCanc primary quarter"
                    >
                        Adicionar Refeição
                    </NavLink>
                </div>
            </div> 
        </div>
    );
};

export default AddRefeicao;
