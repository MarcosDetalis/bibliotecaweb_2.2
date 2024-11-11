import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import {AutenticarContext} from './../context/AutenticarContext'

const PrivateRoute = ({children}) => {
  const { user } = useContext(AutenticarContext);

  return (
    user.logged ? children : <Navigate to='/' />
  )
}

export default PrivateRoute;