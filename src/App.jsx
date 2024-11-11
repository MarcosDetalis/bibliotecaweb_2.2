 
import './App.css'
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";
import AutorVista from "./vistas/AutorVista";
import ListasVista from "./vistas/ListasVista";
import InicioVista from "./vistas/InicioVista";
import ItemVista from "./vistas/ItemVista";
import AccesoVista from "./vistas/AccesoVista";
import ConfirmaVista from "./vistas/ConfirmaVista";
import Login from "./vistas/Login/Login";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import  {AppRouter } from './Router' 
function App() {
 

  return (
    <AppRouter />


   );
  }
 
        
           
    //          <Router>
    //   <ThemeContext>
    //     <UserContext>
          
          
    //       <Routes>
    //         <Route exact path="/" element={<InicioVista/>} />
    //         <Route path="/user" element={<AccesoVista />} />
    //         <Route path="/checkout" element={<ConfirmaVista />} />
    //         <Route path="/collections/:title" element={<ListasVista />} />
    //         <Route path="/authors/:author" element={<AutorVista />} />
    //         <Route path="/books/:book" element={<ItemVista />} >

            
          

    //         </Route>
    //       </Routes> 
          
          
    //     </UserContext>
    //   </ThemeContext>
    // </Router>
          
         
      


export default App
