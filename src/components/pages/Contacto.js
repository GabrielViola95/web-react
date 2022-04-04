import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, AuthProvider } from '../../context/authContext';
import { Alert } from '../Alert';
import './Contacto.css'


const initialState = {
  email: "",
  password: "",
}


const Contacto = () => {
  const [user, setuser] = useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState()

  const {signup} = useAuth();

  // useEffect(() => {

  //   if (user) {
  //     return navigate("/")
  //   }
  // }, [])

  const handleChange = ({target: {name,value}}) => {
    setuser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate('/foro')
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className='login_page'>
            <p className='acces-p'>Registra una cuenta para continuar</p>
            
      {error && <Alert message={error} />}
      
      <form onSubmit={handleSubmit} className="form__main">
        <div className="input-wrap">
          <p htmlFor='email' className='label-form'>Correo</p>
          <input onChange={handleChange} type="email" placeholder='email@example.com'name='email' className='input-form '/>
        </div>
        <div className="input-wrap">
        <p htmlFor='password' className='label-form'>Contraseña</p>
        <input onChange={handleChange} type="password" placeholder='******' name='password' className='input-form'/>
        </div>      
        <div className="btn-wrapper">
        <button className="btn-form">Registrarse</button>
        </div>
    </form> 
      <p className='remember-acount'>¿Ya tienes una cuenta? <Link to="/login" className='link-toresgistrate'>Ingresar</Link></p>
    
            <button className='login-with-google-btn'> Acceder con Google</button>
        </div>
  )
}

export default Contacto;