import React from 'react'
import { useAuth } from '../context/authContext'
import { auth } from '../firebase'

const Comment = ({
    cmt, email, name, photo, id, deleteCmt, uid
}) => {

    const {user} = useAuth()
    return (
        <>

            <div className="main-comments-box" >
                <div className="user-pic">
                    <img src={name ? photo : "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"} alt="profile-image" />
                </div>
                <div className='comments-bottom-post'>
                    <p>{cmt}</p>
                </div>
            </div>
            <div className="footer-comment">
                
                
               {user && uid === auth.currentUser.uid ? (<> <p className='autor-user-without-margin'>
                   {name ? ("@"+ name) : email
                   }</p> 
                   <button className='trash-post' > <i onClick={() => deleteCmt(id)} className="fa-solid fa-trash-can mark-blue-bold"></i> </button> </>) : (<p className='autor-user autor-user-comments'>
                   {name ? ("@"+ name) : email}
                       </p>)
                       }
                
            </div>

        </>
    )
}

export default Comment