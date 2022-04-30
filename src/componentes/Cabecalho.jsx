import React from "react";
import { NavLink } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className="headerBar purple">
      <div className="appName">FitApp</div>
      <div>
        <NavLink
            end
            to="/"
            className={({ isActive }) =>
              "button mr2 " + (isActive ? "active" : "")
            }
          >
            Refeições
          </NavLink>

          <NavLink
            end
            to="/comidas"
            className={({ isActive }) =>
              "button mr2 " + (isActive ? "active" : "")
            }
          >
            Comidas
          </NavLink>
      </div>
    </header>
  );
};

export default Cabecalho;
