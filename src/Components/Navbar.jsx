import { Link, NavLink, Routes } from "react-router-dom";
import Logoimage from "../assets/images/LogoImage.png";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={classes.navbar}>
        <img src={Logoimage} alt="logo" />
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
      </nav>
    </>
  );
}
