import React from 'react'
import { useAuth } from '../context/authContext'
import PostForo from './PostForo';

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
            <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="header-box">
                <div className="title-and-message">
                </div>
            </div>
            <div className="description-box">
                <div className="user-pic">
                    <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="profile-image" />
                </div>
                <textarea className='comments-message-box' type="text" placeholder='Escribe tu pregunta aquí' />
            </div>
            <div className='send-message-bar'>
               <button className='btn-form'>Publicar</button>
                </div>
        </div>}
        <PostForo />
    </div>
  )
}

export default AFQ