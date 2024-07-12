// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from "./pages/Login";
import Projetos from "./pages/Projetos";
import Signup from "./pages/Signup";
import CriarProjetos from "./pages/CriarProjetos";
import Projeto from "./pages/Projeto";
import './App.css';

function App() {
  return (
 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/projetos" element={<Projetos />}/>
          <Route path="/newProject" element={<CriarProjetos />}  />
          <Route path="/project/findProject/:id" element={<Projeto />}/>
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
