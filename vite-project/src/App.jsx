import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Link } from 'react-router-dom'
import Login from "./pages/Login"

function App() {
  return (
    <>

    <Router>

    <Navbar></Navbar>

     <Routes>

     <Route  path="/" element={<Home />}/>
     <Route  path="/login" element={<Login />}/>
     <Route  path="/projetos" element={<Login />}/>

     </Routes>

     <Footer></Footer>

    </Router>
    
    
   
    
    </>
  )
}

export default App