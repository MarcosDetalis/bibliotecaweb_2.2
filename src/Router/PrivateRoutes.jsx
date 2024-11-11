import { Navigate, Route, Routes } from 'react-router-dom';
 
import Login from '../vistas/Login/Login'

export const PrivateRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<Login></Login>} />
            <Route path='/priv' element={<div> op</div>} />

            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};
