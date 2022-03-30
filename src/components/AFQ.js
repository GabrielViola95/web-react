import React from 'react'
import { useAuth } from '../context/authContext'

const AFQ = () => {
    const { user } = useAuth();

  return (
    <div className='box-container'>
        {!user 
        ? 
        <div className='user-offline-warning'><p className='warning-text'>Tienes que iniciar sesión para poder participar y hacer tus propias preguntas</p></div>
        :
        <div className="first-box-main">
            <div className="header-stripe">
            <i className="fa-solid fa-circle-question"></i>
            </div>
            <div className="header-box">
                <div className="title-and-message">
                <p className='message-box mark-blue-bold'>Escriba una pregunta aquí</p>
                <p className='message-small-box space-between'>Reservamos este espacio para que usted pueda realizar una pregunta o revelar una inquietud. Por cualquier otro interés podrá realizar el comentario en la sección de mensajes.</p>
                </div>
            </div>
            <div className="description-box">
                <div className="user-pic">
                    <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="profile-image" />
                </div>
                <textarea className='comments-message-box' type="text" placeholder='Escribe tu mensaje aquí' />
            </div>
            <div className='send-message-bar'>
            
                <div className="author-area">
                    <p className='message-box'>Autor:</p>
                <p className='user-online-box'>
                    {user.email}
                </p>
                </div>
               <button className='btn-form'>Publicar</button>
                </div>
        </div>}
    </div>
  )
}

export default AFQ