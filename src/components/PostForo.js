import React, { useState } from 'react'
import Comment from './Comment';


const PostForo = () => {
    const [showComments, setShowComments] = useState(false);

    const handleShowComments = () => {
        setShowComments(!showComments)
    }

    return (
        <div className="post-box">
            <div className="header-stripe">
            <i className="fa-solid fa-user-astronaut"></i>
            </div>
            <div className="header-box">
                <div className="title-and-message">
                </div>
            </div>
            <div className="description-box">
                <div className="user-pic">
                    <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="profile-image" />
                </div>
                <div className='comments-message-post'>
                <p>Comentario de prueba</p>
                </div>
                
            </div>
            <p className='autor-user'>@emaildeprueba@gmail.com</p>
            <div className="arrow-box">
                
           {!showComments ? <i onClick={handleShowComments} className="fa-solid fa-angles-down"></i> : <i onClick={handleShowComments} className="fa-solid fa-angles-up"></i>}
            </div>
            {/* comments box */}
            <div className={!showComments ? 'hidden-comments' : ' send-comments-bar'}>
                
                <div className="comments-box">
                    <div className="user-pic">
                        <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" alt="profile-image" />

                    </div>
                    <textarea className='comments-bottom-box' type="text" placeholder='Escribe un comentario' />
                    <button className='btn-send-comments'><i className="fa-solid fa-paper-plane"></i></button>
                </div>
                <div className="all-comments-box">
                <Comment />
                </div>
            </div>
            
        </div>
    )
}

export default PostForo