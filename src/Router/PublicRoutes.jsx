
import { Navigate, Route, Routes } from 'react-router-dom';
import InicioVista from "../vistas/InicioVista";
import { Link } from "react-router-dom";
import ItemDetail from '../componentes_con_estilos/ItemDetalles';

import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";
import Login from '../vistas/Login/Login'
import ItemVista from '../vistas/ItemVista'
import AutorVista from '../vistas/AutorVista'
import ListasVista from '../vistas/ListasVista'
import PedidosVista from '../vistas/PedidosVista'

import ConfirmaVista from "../vistas/ConfirmaVista";
export const PublicRoutes = () => {
    return (
        <ThemeContext>
        <UserContext>
          
        <Routes>
               <Route path='/mia' element={<Login></Login>} />
          
                <Route path='public' element={<div>public</div>} />
                <Route path='/home' element={<InicioVista></InicioVista>} />
                {/* <Route path='/books/*' element={<ItemDetail></ItemDetail>} /> */}
                <Route path="/books/:book" element={<ItemVista />} />
                <Route path="/authors/:author" element={<AutorVista />} />

                <Route path="/collections/:title" element={<ListasVista />} />

                <Route path="/pedidos"element={<PedidosVista />} />

                <Route path="/checkout"element={<ConfirmaVista />} />
        </Routes>
        
        </UserContext>
        </ThemeContext>

          
    );
};
