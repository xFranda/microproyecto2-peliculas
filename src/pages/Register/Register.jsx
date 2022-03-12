import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { db, auth, googleProvider } from "../utils/firebase-config";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = async (data) => {
    console.log({ data });
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };

  return (

    <div className="reg">
      <form className= 'form' id="addNewTransactionForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>Bienvenido a tus peliculas de MicroProyecto 2</h2>
        <h3>¡Ingrese los datos y regístrese!</h3>

        <h1 className='headerReg'>Ingrese su nombre </h1>

                    <div className="form-group">
                        <label htmlFor="username">Nombre</label>
                        <input type="text" {... register("name",{required:"Es necesario que ingrese un nombre."})} placeholder="Ingrese su nombre..." />
                        <p className='mensajeR'>{errors.name?.message}</p>
                    </div>


                    <h1 className='headerReg'>Ingrese su correo electronico</h1>
                    <div className="form-group">
                        <label htmlFor="email">Correo electronico</label>
                        <input type="text" {... register("email",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
                        <p className='mensajeR'>{errors.username?.message}</p>
                    </div>

                    <h1 className='headerReg'>Ingrese una contraseña</h1>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'>{errors.password?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Confirme la cotraseña</label>
                        <input type="password2" {... register ('password2',{required:"La confirmacion de la clave es necesaria."})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeR'> {errors.password2?.message}</p>
                    </div>

                    <div className='footerReg'>
                        <button type='submit' className='btnReg'>
                            Registrarse
                        </button> 
                    </div> 
                    <br>
                    </br>

                    <div className='footerReg'>
                        <button type='button' className='btnReg' onClick={handleLoginWithGoogle}>
                            Iniciar sesión con Google
                        </button> 
                    </div> 
      </form>
    </div>
  );
}
