import React from 'react'
import { useAuth } from '../context/authContext'


const MessageForo = () => {
    const { user } = useAuth();
    
  return (
    <div className='box-container'>
        {!user 
        ? 
        <div className='user-offline-warning'><p className='warning-text'>Tienes que iniciar sesión para poder participar y hacer tus propios comentarios</p></div>
        :
        <div className="first-box-main">
            <div className="header-stripe">
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="header-box">
                <div className="title-and-message">
                <p className='message-box mark-blue-bold'>Escriba un mensaje aquí</p>
                <p className='message-small-box space-between'>Reservamos este espacio para que usted pueda compartir con nosotros un pensamiento, reflexión o cualquier tipo de mensaje.</p>
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

export default MessageForo