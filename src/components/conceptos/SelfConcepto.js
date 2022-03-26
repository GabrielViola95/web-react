import React from 'react'
import { Link } from 'react-router-dom'

const SelfConcepto = () => {
  return (
    <div className="Info-table">
            <h2 className='title-info'>El Self</h2>
            <p className='description-info'>La <span className='mark-bold'>Psicoterapia Cognitiva Posracionalista</span>  es un tipo de terapia desarrollada en los años 90 por el neuropsiquiatra italiano <span className='mark-bold'>Vittorio Guidano</span>. Se enmarca dentro de una perspectiva constructivista, que entiende que la realidad la vamos construyendo de forma única y personal.
            </p>
            <p className='description-info'>Así, habría tantas realidades como personas. Esta terapia, además, le da mucha importancia a la<span className='mark-bold'> identidad personal y al lenguaje</span>. En este artículo conoceremos sus características generales, así como las ideas de Guidano y algunas de las técnicas que utiliza a través de su modelo.</p>
            <p className='description-info'>La Psicoterapia Cognitiva Posracionalista fue creada por Vittorio Guidano a lo largo de toda su vida; aproximadamente, desde los años 70 hasta el año 1994. Se considera un tipo de terapia cognitiva pero también constructivista, en la cual la relación terapéutica se entiende como “de experto a experto”. Su objetivo principal es que la persona sea capaz de construir una identidad propia a través de diferentes estrategias que veremos a continuación.</p>
            <p className='description-info'>
            Este tipo de terapia se utiliza como intervención clínica psicológica, y a su vez constituye una escuela teórica en psicología. Esta escuela sigue un modelo teórico que defiende que el ser humano intenta crear cierta continuidad en el sentido de sí mismo y de su historia personal, a través de una identidad narrativa coherente y flexible. Dicha identidad se puede ver reflejada en elaboraciones narrativas que desarrolla el paciente. 
            </p>
            <p className='description-info'>¿Ya lo conoces? Te presento a <span className='mark-bold'><Link to="/">Guidano</Link></span>:</p>
            <img src="https://pymstatic.com/45655/conversions/vittorio-guidano-default.jpg" alt='Vittorio Guidano Perfil Retrato' />
        </div>
  )
}

export default SelfConcepto