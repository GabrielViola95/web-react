import React from 'react'

const Comment = () => {
    return (
        <>
            
                <div className="main-comments-box">
                    <div className="user-pic">
                        <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="profile-image" />
                    </div>
                    <div className='comments-bottom-post'>
                        <p>Comentario de prueba</p>
                    </div>
                </div>
                <p className='autor-user autor-user-comments'>@emaildeprueba@gmail.com</p>
            
        </>
    )
}

export default Comment