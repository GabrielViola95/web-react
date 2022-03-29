import Card from "./Card";
import { useState } from "react";
import JsonCards from '../data/card-hero.json';
import ReactPaginate from "react-paginate";



const Galery = () => {
  const [cards, setCards] = useState(JsonCards.slice(0, 9));
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
{/* <ReactPaginate
     previousLabel={"<"}
     nextLabel={">"}
     pageCount={pageCount}
     onPageChange={changePage}
     containerClassName={"paginationBtns"}
     previousLinkClassName={"previousBtns"}
     nextLinkClassName={"nextBtn"}
     disabledClassName={"paginationDisabled"}
     activeClassName={"paginationActive"}
     /> */}
    </div>
    
  )
}

export default Galery