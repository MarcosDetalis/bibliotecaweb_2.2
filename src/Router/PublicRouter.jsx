import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import {AutenticarContext} from './../context/AutenticarContext'

const PublicRouter = ({children}) => {
    const { user } = useContext(AutenticarContext);

  return (
    user.logged ? <Navigate to='/home'/> : children
  )
}

export default PublicRouter