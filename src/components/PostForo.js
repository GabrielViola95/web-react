import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import {auth} from '../firebase';
import {useAuth} from '../context/authContext';
import { deleteDoc, onSnapshot, getDocs, doc, setDoc, addDoc, collection, query, where, collectionGroup } from "firebase/firestore";
import { db } from "../firebase";
import Loader from './Loader';


const PostForo = ({ question, deletePost, id, autorEmail, autorName, imageProfile, PostId, Hour, Datte, uid }) => {
    const [loading, setLoading] = useState(false);
    const {user} = useAuth()
    
    const [showComments, setShowComments] = useState(false);
    
    const handleShowComments = () => {
        setShowComments(!showComments)
    }
    
    // createcomments
    
    
    const [message, setMessage] = useState("");
    
    const [messageList, setMessageList] = useState([]);
    


    const messageDocumentRef = collection(db, `posts`, `${PostId}`, `messages`);

    const createMessage = async () => {
        await addDoc(messageDocumentRef,{message, author: { name: auth.currentUser.displayName, uid: auth.currentUser.uid, email: auth.currentUser.email, image: auth.currentUser.photoURL }}
         );
         let textarea2 = document.getElementById('textarea-post2');
         textarea2.value = "";
      };

      const deleteCmt = async (id) =>{
        setLoading(true);
        // const messageDoc = doc(db, `posts/${id}/messages/${id}`, id);
        const commentDoc = doc(db, `posts/${PostId}/messages`, id);
        
        await deleteDoc(commentDoc);
        setLoading(false);
        
        
      };
    
    useEffect(() => {
        
        const getMessage = async () => {
            //   const data = await getDocs(doc(db, "posts", "messages", "message"));
            //   setMessageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            // };

            // getMessage();

            // const messages = query(collectionGroup(db, 'messages'));
            //     const querySnapshot = await getDocs(messages);
            //     querySnapshot.forEach((msg) => {
            //     // console.log(msg.data());
            //     let msgRef = msg.data()
            //     setMessageList([msg.data()])
            //     });

            // let collectionRef = collection(db, "posts", `${PostId}`, "messages");
            const data = await getDocs(messageDocumentRef);

            // console.log("Id: ", doc.id, "Data: ", doc.data());
            setMessageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                    // setMessageList(msg.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
             
            }
                getMessage();
        
      }, [deleteCmt, createMessage]);
    //   deleteMessage


    return (
        <div className="post-box" >
            <div className="header-stripe">
            {user.name === "Vittorio Guidano" || autorName === "Vittorio Guidano" ? <i className="fa-solid fa-star"></i> : <i className="fa-solid fa-user-astronaut"></i>}
            <p className='post-time-register'>{Hour}</p>
            <p className='post-time-register'>{Datte}</p>
            {user && uid === auth.currentUser.uid &&
            <button className='trash-post' > <i onClick={() => { deletePost(PostId) }} className="fa-solid fa-trash-can"></i> </button>}
            </div>
            <div className="header-box">
                <div className="title-and-message">
                </div>
            </div>
            <div className="description-box">
                <div className="user-pic">
                    <img src={imageProfile || "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"} alt="profile-image" />
                </div>
                <div className='comments-message-post'>
                <p>{question}</p>
                </div>
                
            </div>
            <p className='autor-user'>{autorName || autorEmail}</p>
            <div className="arrow-box">
                
           {!showComments ? <i onClick={handleShowComments} className="fa-solid fa-angles-down"></i> : <i onClick={handleShowComments} className="fa-solid fa-angles-up"></i>}
            </div>
            {/* comments box */}
            <div className={!showComments ? 'hidden-comments' : ' send-comments-bar'}>
                
                <div className="comments-box">
                    <div className="user-pic">
                        <img className='comment-image-profil' src={auth.currentUser.photoURL || "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"} alt="profile-image" />
                    </div>
                    <textarea id='textarea-post2' onChange={(e)=>{setMessage(e.target.value)}} className='comments-bottom-box' type="text" placeholder='Escribe un comentario' />
                    <button onClick={createMessage} className='btn-send-comments'><i className="fa-solid fa-paper-plane"></i></button>
                </div>
                <div className="all-comments-box">
                
                <div className="Loader-box-center">
                {loading && <Loader/>}
                </div>

                { messageList.map((msg)=>{
                    
                    return (
                        <Comment 
                        key={msg.id}
                        id={msg.id}
                        cmt={msg.message}
                        email={msg.author.email}
                        name={msg.author.name}
                        photo={msg.author.image}
                        uid={msg.author.uid}
                        deleteCmt={deleteCmt}
                        />                        
                    )
                    
                }) }

                </div>
            </div>
            
        </div>
    )
}

export default PostForo