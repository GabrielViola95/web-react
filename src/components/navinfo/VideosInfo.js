import guidano from '../../assets/miniaturas/guidano.jpg';
import apego from '../../assets/miniaturas/apego.jpg';
import emociones from '../../assets/miniaturas/emociones.jpg';
import osptokyo from '../../assets/miniaturas/osptokyo.jpg';

const VideosInfo = () => {
  return (
    <div className="Info-table">
            <h2 className='title-info-others'>Videos del Canal <i class="fa-brands fa-youtube"></i> </h2>
            <p className='description-info'>En nuestro <span className='mark-bold underline'><a target="_blank" href="https://www.youtube.com/channel/UCaMiKcibLN6N04Cfogz8Pcw">canal de youtube</a></span> contamos con una serie de videos que pretenden bajar a tierra, de manera dinámica y entretenida, los conceptos de este enfoque de Psicoterapia. </p>

            <p className='description-info'>A continuación te comentamos algunos de ellos por si te interesa investigarlos por cuenta propia. Además, hacia el final podras ver videos recomendados.
            </p>
            {/* Video */}
            <h2 className='title-videos-osp'>¿Quien es Vittorio Guidano? El creador del POSTRACIONALISMO</h2>
            <img src={guidano} alt='Vittorio-Guidano Psicoterapeuta Posracionalista' />
            <p className='description-info'>Bienvenidos a este canal de psicología llamado el Post-racionalista. Nombre asociado directamente con el moderno enfoque de psicoterapia conocido como POSRACIONALISMO. Nombre a su vez asociado a Vittorio Guidano, su creador. Ahora mismo te voy a contar quién es y de donde viene este genio de la mente ¡No te lo pierdas!</p>
            <p className='description-info underline align-end'><a target="_blank" href="https://www.youtube.com/watch?v=--Hh2VKpLu0&t=1s"><i class="fa-brands fa-youtube"></i> Click aquí</a></p>
            {/* Fin video */}
            {/* Video */}
            <h2 className='title-videos-osp'>¿Qué es el APEGO? ¿La teoría más importante de la Psicología?</h2>
            <img src={apego} alt='Apego vinculo aproximacion' />
            <p className='description-info'>Sin duda alguna, la teoría más famosa de la psicología. Hoy vamos a empezar a contarte algunas cosas sobre ella. Comenzamos a construir la base de un enorme edificio ¡No te lo pierdas!</p>
            <p className='description-info underline align-end'><a target="_blank" href="https://www.youtube.com/watch?v=pJgef-9qFXE"><i class="fa-brands fa-youtube"></i> Click aquí</a></p>
            {/* Fin video */}
            {/* Video */}
            <h2 className='title-videos-osp'>¿Qué son las EMOCIONES? ¿Las podes reconocer?</h2>
            <img src={emociones} alt='emociones ekman' />
            <p className='description-info'>¡Bienvenidos! Hoy vamos a hablar sobre las emociones. Vamos a poner a prueba tu conocimiento como homo psicologicus y ver si sos capaz de reconocer todas las emociones básicas! Y si no, no te preocupes ¡Este video te va a ayudar!</p>
            <p className='description-info underline align-end'><a target="_blank" href="https://www.youtube.com/watch?v=x_bq9PvnclA"><i class="fa-brands fa-youtube"></i> Click aquí</a></p>
            {/* Fin video */}
            {/* Video */}
            <h2 className='title-videos-osp'>¿Qué es una OSP? ¿Cuál es la OSP de Tokyo?</h2>
            <img src={osptokyo} alt='OSP personalidad' />
            <p className='description-info'>Hoy nos introduciremos en un concepto fundamental para el posracionalismo y una herramienta explicativa que permite entender mejor a los homo psicologicus, hablaremos acerca de qué es una Organización de Significado Personal. Además, para entenderlo mejor, analizaremos en términos generales uno de los personajes de la reconocida serie La Casa de Papel ¡Que lo disfrutes!</p>
            <p className='description-info underline align-end'><a target="_blank" href="https://www.youtube.com/watch?v=eI0N21pa98E"><i class="fa-brands fa-youtube"></i> Click aquí</a></p>
            {/* Fin video */}
            
            <p className='description-info'>También te recomendamos los siguientes videos:
            </p>
            
            {/* Video */}
            <h2 className='title-videos-osp'>Vittorio Guidano: Psicología y Psicoterapia Cognitiva Posracionalista.</h2>
            <img src="https://i.ytimg.com/vi/tSbLsS4DnVM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDf3R48wNfNc9uxD1faMi-25IMbhQ" alt='Guidano Entrevista Cristián-Warnken' />
            <p className='description-info'>El Dr. Vittorio Guidano conversa con Cristián Warnken, en el programa "La Belleza de Pensar" (1995).</p>
            <p className='description-info underline align-end'><a target="_blank" href='https://www.youtube.com/watch?v=tSbLsS4DnVM&t'><i class="fa-brands fa-youtube"></i> Click aquí</a></p>
            {/* Fin video */}

            <p className='description-info'>
                Hasta acá los <span className='mark-bold'>Videos</span> que te recomendamos, espero te haya resultado interesante. <i class="fa-solid fa-thumbs-up"></i>
            </p>
        </div>
  )
}

export default VideosInfo