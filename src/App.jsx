import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  // Estado para controlar la visibilidad del Sidebar
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  //alterna la visibilidad del Sidebar
  const togglesdiebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
