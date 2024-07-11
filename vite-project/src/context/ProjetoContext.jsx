
import { createContext, useState } from "react";

export const ProjetoContext = createContext();


export  default function ProjetoProvider({ children }) {
    const [projeto, setProjeto] = useState([]);
  
    return (
      <ProjetoContext.Provider value={{ projeto, setProjeto}}>
        {children}
      </ProjetoContext.Provider>
    );
  }
  