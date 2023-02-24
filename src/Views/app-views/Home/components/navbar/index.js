import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="page">
        {" "}
        <div className="pages">
          <NavLink exact to="/home" activeClassName="active">
            HOME
          </NavLink>{" "}
        </div>
        <div className="pages">
          {" "}
          <NavLink to="/agents">AGENTS</NavLink>{" "}
        </div>
        <div className="pages">
          {" "}
          <NavLink to="/maps">MAPS</NavLink>{" "}
        </div>
        <div className="pages">
          {" "}
          <NavLink to="/weapons">WEAPONS</NavLink>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
