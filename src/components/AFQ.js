import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, getDocs, doc, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useAuth } from '../context/authContext';
import PostForo from './PostForo';


const AFQ = () => {
    const { user, isAuth } = useAuth();

    // createPost

    const [postText, setPostText] = useState("");

    const createPost = async () => {
        await addDoc(postsCollectionRef, { postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid, email: auth.currentUser.email, image: auth.currentUser.photoURL }
         });
         
      };
    
      useEffect(() => {
        if(!isAuth){
         
        }
      }, [])

    //   console.log(auth.currentUser)
    // postList
    
    const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) =>{
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);  



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
                </div>
            </div>
            <div className="description-box">
                <div className="user-pic">
                    <img src={auth.currentUser.photoURL || "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"} alt="profile-image" />
                </div>
                <textarea onChange={(e)=>{setPostText(e.target.value)}} className='comments-message-box' type="text" placeholder='Escribe tu pregunta aquí' />
            </div>
            <div className='send-message-bar'>
               <button onClick={createPost} className='btn-form'>Publicar</button>
                </div>
        </div>}
        {postList.map((post) => {
            return(
                <PostForo key={post.id} question={post.postText} autorName={post.author.name}  autorEmail={post.author.email} deletePost={deletePost} id={post.id} postId={post.author.id} imageProfile={post.author.image} />
            )
        })
        }
    </div>
  )
}

export default AFQ