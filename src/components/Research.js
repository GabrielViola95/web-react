import React from 'react'

const Research = (props) => {
  return (
    <div id={props.id}>
            <p className='description-info research'>
               <span className='mark-bold'> <i className='fas fa-clipboard-check'></i> <a target="_blank" href={props.link}>{props.title}</a></span>
            </p>
            <p className='description-info'><span className='mark-bold'>Resumen:</span></p>
            <p className='description-info'>{props.resume}</p>
            <p className='description-info underline'><a href={props.link}>Ir al Link</a></p>
            </div>
  )
}

export default Research