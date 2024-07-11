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

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <div className="App">
        <Sidebar />
        <div className="content">
          <h1>Welcome </h1>
          <p>Here you can find a lot of interesting information.</p>
        </div>
      </div>
    </>
  );
}

export default App;
