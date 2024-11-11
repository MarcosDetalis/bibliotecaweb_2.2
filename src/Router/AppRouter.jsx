import React, { useEffect } from 'react'
import { useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "."

import {AutenticarContext} from './../context/AutenticarContext'
import {authReducer} from './../reducers/authReducer'
import Login from '../vistas/Login/Login'

import PublicRouter from './PublicRouter'
import PrivateRoute from './PrivateRoute'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
  }

export const AppRouter = ( ) => {

 const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

    return (

    <AutenticarContext.Provider value={{ user, dispatch }}>
        <BrowserRouter> 
            <Routes>
            <Route path='/' element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }/>
            <Route path='/*' element={
              <PrivateRoute>
                <PublicRoutes/>
              </PrivateRoute>
            }/>
            
            </Routes>
        </BrowserRouter>
        </AutenticarContext.Provider>
    )
}