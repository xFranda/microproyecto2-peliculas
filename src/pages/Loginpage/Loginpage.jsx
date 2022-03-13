import { useForm } from "react-hook-form";
import "./Login.module.css"
import { useNavigate } from "react-router-dom";
import { db, auth, googleProvider } from "../../utils/firebase-config";


function Login(){
    const{register,handleSubmit, formState: { errors }}=useForm();

const navigate = useNavigate();

const onSubmit = async(data) => {
    console.log({data});
    console.log(data.email, data.password)
    await auth.signInWithEmailAndPassword(data.email, data.password);
    navigate("/");
};

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };


    return(
        <div className='login'>
            <h1 className='header'>Inicio de sesión</h1>
            <div className= 'content'> 

                
                <div className='image'>
                    <img  className='imaL'src='./popcorn.png' alt=""/>
                </div>
                
                <form className='form'onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label htmlFor="username">Correo electronico</label>
                        <input type="text" {... register("email",{required:"Un correo electronico es necesario"})} placeholder="Ingrese su correo..." />
                        <p className='mensajeL'>{errors.username?.message}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" {... register ("password",{required:"Una clave es necesaria"})} placeholder="Ingrese su contraseña..." />
                        <p className='mensajeL'>{errors.password?.message}</p>
                    </div>

                    <div className='footer'>
                        <button type='submit' className='btn'>
                            Iniciar sesión
                        </button> 
                        <br />
                    <br />
                    </div>

                    <div>
                    <button type="button" onClick={handleLoginWithGoogle}>
                    Inicia Sesión con Google
                    </button>
                    </div>

                </form>

            </div>

            
    


        </div>


    )
}

export default Login