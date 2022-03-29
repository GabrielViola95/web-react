import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import JsonResearches from '../../data/researches.json'
import ReactPaginate from 'react-paginate';
import Research from '../Research';

const Investigacion = () => {
   const [researches, setResearches] = useState(JsonResearches.slice(0, 9));
   const [pageNumber, setPageNumber] = useState(0);

   const researchesPerPage = 3;
   const pagesVisited = pageNumber * researchesPerPage;
   
   const displayResearches = researches.slice(pagesVisited, pagesVisited + researchesPerPage).map((research) => {
      return (
         <> <Research key={research.id} id={research.id} link={research.link} resume={research.resume} title={research.title}/>
         </>
      )
   })

   const pageCount = Math.ceil(researches.length / researchesPerPage);

   const changePage = ({selected}) => {
      setPageNumber(selected)
   };

  return (
    <div className="Info-table">
            <h2 className='title-info-others'>Investigaciónes & Estudios <i className="fas fa-dna"></i> </h2>
            <p className='description-info'>La <span className='mark-bold'>Psicoterapia Cognitiva Posracionalista</span>  es un enfoque relativamente nuevo por lo que existen muchos ámbitos y áreas aún inexplorados. De cualquier manera, se cuentan muchos estudios interesantes que complementan, enriquecen y renuevan el enfoque actual posracionalista. <span className='mark-bold'>Vittorio Guidano</span> se marchó ya hace tiempo, pero su ojo clínicio continúa sorprendiendonos.
            </p>
            <p className='description-info'>En este apartado te queremos dejar una serie de links para continuar profundizando y aprendiendo sobre el tema. El estudio de conceptos tales como <span className='mark-bold'> identidad personal, lenguaje, emociones </span> o cualquier otro en relación a los <span className='mark-bold'>Homo Psicologicus</span> no pueden ser estudiados de forma aislada y simple, sino en relación y teniendo en vista siempre la <span className='mark-bold underline'><a href="https://www.psi.uba.ar/academica/carrerasdegrado/psicologia/sitios_catedras/electivas/102_infanto_juvenil/material/complejidad_morin.pdf" target="_blank">Complejidad</a></span>.</p>

            {/* INVESTIGACIONES */}
            
            {displayResearches}

           {/* <ReactPaginate 
           previousLabel={"Anterior"}
           nextLabel={"Siguiente"}
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

export default Investigacion