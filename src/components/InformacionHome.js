import React from 'react'
import { Link } from 'react-router-dom';

const InformacionHome = () => {
    return (
        <div className="Info-table">
            <h2 className='title-info'>El Posracionalismo </h2>
            <p className='description-info'>La <span className='mark-bold'>Psicoterapia Cognitiva Posracionalista</span>  es un tipo de terapia desarrollada en los años 90 por el neuropsiquiatra italiano <span className='mark-bold'>Vittorio Guidano</span>. Se enmarca dentro de una perspectiva constructivista, que entiende que la realidad la vamos construyendo de forma única y personal.
            </p>
            <p className='description-info'>Así, habría tantas realidades como personas. Esta terapia, además, le da mucha importancia a la<span className='mark-bold'> identidad personal, a las emociones y al lenguaje</span>. En este artículo conoceremos sus características generales, así como las ideas de Guidano y algunas de las técnicas que utiliza a través de su modelo.</p>
            <p className='description-info'>La <span className='mark-bold'>Psicoterapia Cognitiva Posracionalista</span> fue creada por <span className='mark-bold'>Vittorio Guidano</span> a lo largo de toda su vida; aproximadamente, desde los años 70 hasta el año 1994. Se considera <span className='mark-bold'>un tipo de terapia cognitiva constructivista</span>, en la cual la relación terapéutica se entiende como <span className='mark-bold'>“de experto a experto”</span>. Su objetivo principal es que la persona incremente el autoconocimiento personal y regule sus propios mecánismos de autoengaño.</p>
            <p className='description-info'>
            Este tipo de terapia se utiliza como intervención clínica psicológica, y a su vez constituye una escuela teórica en psicología. Esta escuela sigue un modelo teórico que defiende que <span className='mark-bold'>el ser humano intenta crear cierta continuidad en el sentido de sí mismo y de su historia personal, a través de una identidad narrativa coherente y flexible</span>. Dicha identidad se puede ver reflejada en elaboraciones narrativas que desarrolla el paciente.
            </p>
            <p className='description-info'>¿Ya conoces al fundador del Posracionalismo? Te presento a <span className='mark-bold'><Link to="/">Guidano</Link></span>:</p>
            <img src="https://pymstatic.com/45655/conversions/vittorio-guidano-default.jpg" alt='Vittorio Guidano Perfil Retrato' />

            <p className='description-info'>
            En la Psicoterapia Cognitiva Posracionalista de Guidano se plantean dos niveles en los que se desarrolla toda experiencia humana. El primer nivel consiste en la experiencia inmediata que experimentamos, y que está formada por un conjunto de emociones, conductas y sensaciones que fluyen de forma inconsciente.
            </p>
            <p className='description-info'>
            El segundo nivel de la experiencia humana consiste en la explicación que le damos a la experiencia inmediata; esto es, cómo ordenamos, entendemos y concebimos dicha realidad.
            </p>
            <p className='description-info'>
                Esta psicoterapia promueve un método muy concreto de trabajo, que se centra en la <span className='mark-bold'>auto-observación</span>. La auto-observación es un método que permite a la persona “verse desde fuera” y reflexionar sobre su conducta, sus pensamientos y sus actitudes. Para Guidano la psicoterapia no tiene que ser un conjunto de técnicas específicas administradas, sino <span className='mark-bold'>un proceso interpersonal que se desarrolla entre un experto en psicoterapia y un experto en sí mismo de la mano de un método: la moviola</span>.
            </p>

            <p className='description-info'>
                Hasta acá nuestro resumen del <span className='mark-bold'>Posracionalismo</span>, espero te haya resultado interesante. <i className="fa-solid fa-thumbs-up"></i>
            </p>
        </div>
    )
}

export default InformacionHome;