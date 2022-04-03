import React from 'react'

const Comment = ({
    cmt,email,name,photo, id, deleteCmt
}) => {
    return (
        <>
            
                <div className="main-comments-box" >
                    <div className="user-pic">
                        <img src={photo ||"https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"}  alt="profile-image"/>
                    </div>
                    <div className='comments-bottom-post'>
                        <p onClick={() => deleteCmt(id)} >{cmt}</p>
                    </div>
                </div>
                <p className='autor-user autor-user-comments'>{ "@" + name || email }</p>
            
        </>
    )
}

export default Comment