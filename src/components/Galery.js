import Card from "./Card";
import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import JsonCards from '../data/card-hero.json';
import ReactPaginate from "react-paginate";
import { db } from "../firebase";



const Galery = () => {

  const postsCollectionRef = collection(db, "galery");
  
  const [cards, setCards] = useState([].slice(0, 9));
  
  useEffect(() => {
    
    const getGalery = async () => {
      const data = await getDocs(postsCollectionRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getGalery(); 
  }, []);  

   const [pageNumber, setPageNumber] = useState(0);

   const cardsPerPage = 3;
   const pagesVisited = pageNumber * cardsPerPage;

   const displayCards = cards.slice(pagesVisited, pagesVisited + cardsPerPage).map((card) => {
    return (
      <div className="card-wrap" key={card.id}>
      <Card title={card.title} description={card.description} image={card.image} link={card.link} />
      </div>
    )
 })

 const pageCount = Math.ceil(cards.length / cardsPerPage);

   const changePage = ({selected}) => {
      setPageNumber(selected)
   };

  return (
    <div className="bg-dark">
    <div className='galery-container'>

{displayCards}
  

  
  
</div>
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
    </div>
    
  )
}

export default Galery