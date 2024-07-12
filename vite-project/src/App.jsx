import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Link } from 'react-router-dom'
import Login from "./pages/Login"
import Projetos from "./pages/Projetos"
import Signup from "./pages/Signup"
import CriarProjetos from "./pages/CriarProjetos"
import Projeto from "./pages/Projeto"

function App() {


  return (
    <>

    <Router>

    <Navbar></Navbar>

     <Routes>

     <Route  path="/" element={<Home />}/>
     <Route  path="/login" element={<Login />}/>
     <Route  path="/projetos" element={<Projetos />}/>
     <Route path="/signup" element={<Signup />} />
     <Route path="/newProject/" element={<CriarProjetos />} />
     <Route path="/project/findProject/:id" element={<Projeto />} />

     </Routes>

     <Footer></Footer>

    </Router>
    
    
   
    
    </>
  )
}

export default App