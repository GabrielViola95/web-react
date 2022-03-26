import React from 'react';
import organismoEmociones from '../../assets/emociones/organismoEmociones.png';
import seisEmociones from '../../assets/emociones/seisEmociones.png';
import sistemaLimbico from '../../assets/emociones/sistemaLimbico.png';

const EmocionesConcepto = () => {
  return (
    <div className="Info-table">
            <h2 className='title-info'>¿Qué son las Emociones?</h2>
            <p className='description-info'>Las <span className='mark-bold'>Emociones</span> son un hecho empírico, tanto para nuestra experiencia como para la ciencia. Las emociones nos movilizan y nos informan, <span className='mark-bold'>constituyen la base de nuestra experiencia y de nuestro significado personal</span>. En general, se caracterizan por una activación fisiológica, una reacción motora-conductual y una experiencia consciente. No tengas dudas de que conocer e identificar las emociones puede ayudarte a volverte más adaptativo y aumentar tu bienestar personal.
            </p>
            <img src={sistemaLimbico} alt='Sistema Limbico' />

            <p className='description-info'>Según el catedrático <span className='mark-bold'>Paul Ekman</span> existen 6 emociones básicas universales que tenemos todos los homo psicologicus y compartimos con otras especies. En estas imágenes se encuentran todas las propuestas por este gran investigador. Quiero que intentes reconocerlas a todas… Si queres podes ver atentamente la imágen y cuando creas haberlas identificado a todas leer la parte de abajo. </p>

            <img src={seisEmociones} alt='Emociones Básicas Ekman' />

            <p className='description-info'>En fin, ahí vamos: la primera es <span className='mark-bold'>IRA</span>, la segunda, <span className='mark-bold'>MIEDO</span>, la tercera, <span className='mark-bold'>ASCO</span>, la cuarta, <span className='mark-bold'>SORPRESA</span>, la quinta, <span className='mark-bold'>ALEGRÍA</span> y la última, <span className='mark-bold'>TRISTEZA</span>.</p>
            <p className='description-info'>
            Según las investigaciones de Ekman, en todas las culturas podemos encontrar estas 6 emociones básicas. Pero también existen otras emociones que si pueden variar y se encuentran ya más influidas por la cultura, son aprendidas y adquiridas: por eso son conocidas como <span className='mark-bold'>Emociones Secundarias</span>. Según esta posición, algunos ejemplos serían <span className='mark-bold'> verguenza, culpa, orgullo, entusiasmo, satisfacción, desprecio, complacencia, placer</span>...
            </p>
            <img src={organismoEmociones} alt='Organismo Emociones Localización' />

            <p className='description-info'>
                Hasta acá nuestro resumen de las <span className='mark-bold'>Emociones</span>, espero te haya resultado interesante. <i class="fa-solid fa-thumbs-up"></i>
            </p>
        </div>
  )
}

export default EmocionesConcepto