import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import  ProjetoProvider  from './context/ProjetoContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
  <ProjetoProvider>
   <App></App>
  </ProjetoProvider>
  </UserProvider>
  </React.StrictMode>,
)

