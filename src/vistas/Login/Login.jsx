
import { Formik, Form, Field } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import LogInContainer from './Logincss'
import {AppRouter} from './../../Router/AppRouter'
import React, { useContext } from "react";
import {AutenticarContext} from './../../context/AutenticarContext'

import { login } from './../../actions/authAction';

 const schema = Yup.object().shape({
  email: Yup.string()
    .required("El correo es requerido")
    .email("Formato de correo incorrecto"),
  password: Yup.string()
    .required("La contraseña es requerido")
    .min(2, "Longitud requeridad"),
});

 export default function Login() {

  
  const { dispatch } = useContext(AutenticarContext);

  
  const handleSubmit = async valores => {
     console.log("firtr",valores.email,valores.password )
    let res = await fetch("http://localhost:4005/login/auten", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        correo:valores.email,
        pass: valores.password,
      }),
    });
    const token  = await  res.json();
    if (res.status != 500) {
      console.log("Acceso Correcto");
      dispatch(login(token.data.token,));
    }else{
      console.log("nocorre");
      //dispatch(logout(''));
      alert("Credenciales no validas")
      
    
    }
            
          }

 


  return (
    <LogInContainer>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}      
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={ 
          async ( values, { resetForm } )=>{
            await handleSubmit( values );

            resetForm();
        }}
       
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
              {/* Our input html with passing formik parameters like, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}

                <button type="submit"  >  Ingresar  </button>

              
              </form>
            </div>
          </div>
        )}
      </Formik>
    </LogInContainer>
  );
}
