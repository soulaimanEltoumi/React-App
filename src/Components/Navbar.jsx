import { Link, NavLink, Routes } from "react-router-dom";
import Logoimage from "../Components/images/5403020.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logoimage} alt="logo" />
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
      </nav>
    </>
  );
}
