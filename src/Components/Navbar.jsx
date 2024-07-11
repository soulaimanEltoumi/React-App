import { Link, NavLink, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/about"> About </NavLink>
    </>
  );
}
