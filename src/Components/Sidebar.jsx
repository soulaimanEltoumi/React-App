import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#about">Sobre nosotros</a>
        </li>
        <li>
          <a href="#contact">Calories</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
