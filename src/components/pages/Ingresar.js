import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Alert } from '../Alert';
import './Contacto.css';


const initialState = {
    email: "",
    password: "",
  }

const Ingresar = () => {
    const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState()

  const {login, loginWithGoogle, resetPassword} = useAuth();

  // useEffect(() => {

  //   if (user) {
  //     return navigate("/")
  //   }
  // }, [])

  const handleChange = ({target: {name,value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  };

  const handleResetPasword = async() => {
    if (!user.email) return setError('Por favor ingresa tu e-mail');
    try {
      await resetPassword(user.email);
      setError('Te hemos enviado un email con un enlace para reestablecer tu contraseña')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='login_page'>
            <p className='acces-p'>Ingresa con una cuenta y participa</p>
            
      {error && <Alert message={error} />}
      
      <form onSubmit={handleSubmit} className="form__main">
        <div className="input-wrap">
          <p htmlFor='email' className='label-form'>Correo</p>
          <input onChange={handleChange} type="email" placeholder='email@example.com'name='email' className='input-form '/>
        </div>
        <div className="input-wrap">
        <p htmlFor='password' className='label-form'>Contraseña</p>
        <input onChange={handleChange} autoComplete="on" type="password" placeholder='******' name='password' className='input-form'/>
        </div>      
        <div className="btn-wrapper">
        <button className="btn-form">Ingresar</button>
        </div>
        <div className="btn-wrapper">
        <a onClick={handleResetPasword} href="#" className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>Olvidaste tu contraseña?</a>

        </div>
    </form> 
      <p className='remember-acount'>¿No tienes una cuenta? <Link to="/signup" className='link-toresgistrate'>Registrate</Link></p>


    
            <button onClick={handleGoogleSignin} className='login-with-google-btn'> Acceder con Google</button>
        </div>
  )
}

export default Ingresar;