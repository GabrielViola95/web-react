import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, getDocs, doc, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useAuth } from '../context/authContext';
import PostForo from './PostForo';
import { ProtectedRoute } from './ProtecterRouter';
import ReactPaginate from 'react-paginate';
import Loader from './Loader';


const AFQ = () => {
    const { user, isAuth } = useAuth();
    const [loading, setLoading] = useState(false);

    // createPost

    const [postText, setPostText] = useState("");

  let date = new Date;
  let datePost = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
  let dateHour = (date.getHours()< 10 ? ('0' + date.getHours()) : date.getHours()) + ':' + (date.getMinutes()< 10 ? '0' + date.getMinutes() : date.getMinutes());

  // ***createPOST***

  const handleChange = (e) => {
    setPostText(e.target.value)
  }

    const createPost = async () => {
        await addDoc(postsCollectionRef, { postText, dateHour, datePost, author: { name: auth.currentUser.displayName, uid: auth.currentUser.uid, email: auth.currentUser.email, image: auth.currentUser.photoURL }
         });
         setPostText("")
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
    setLoading(true);
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setLoading(false);
    
  };

  useEffect(() => {
    
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts(); 
  }, [deletePost, createPost]);  

  
  

  // pagination

  const [pageNumber, setPageNumber] = useState(0);

   const postPerPage = 5;
   const pagesVisited = pageNumber * postPerPage;

   const pageCount = Math.ceil(postList.length / postPerPage);

   const changePage = ({selected}) => {
      setPageNumber(selected)
   };

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
                <textarea id='textarea-post' onChange={handleChange} className='comments-message-box' type="text" placeholder='Escribe tu pregunta aquí' value={postText} />
            </div>
            <div className='send-message-bar'>
               <button onClick={createPost} className='btn-form'>Publicar</button>
                </div>
        </div>}
        <ProtectedRoute>
          {loading && <Loader/>}
        {postList.slice(pagesVisited, pagesVisited + postPerPage).map((post) => {
            return(
                <PostForo 
                key={post.id} 
                Hour={post.dateHour} 
                Datte={post.datePost}
                question={post.postText} 
                autorName={post.author.name}  
                autorEmail={post.author.email} 
                deletePost={deletePost} 
                PostId={post.id} 
                uid={post.author.uid} 
                imageProfile={post.author.image} /> 
                
            )
        })
        }
        <ReactPaginate
     previousLabel={"<"}
     nextLabel={">"}
     pageCount={pageCount}
     onPageChange={changePage}
     containerClassName={"paginationBtns"}
     previousLinkClassName={"previousBtns"}
     nextLinkClassName={"nextBtn"}
     disabledClassName={"paginationDisabled"}
     activeClassName={"paginationActive"}
     />
        </ProtectedRoute>
    </div>
  )
}

export default AFQ