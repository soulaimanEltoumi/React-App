import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Logo from "./Components/images/LogoImage.png";

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
      <div className="App">
        <div className="content">
          <h1>Welcome </h1>
          <p>Here you can find a lot of interesting information.</p>
        </div>
      </div>
    </>
  );
}

export default App;
