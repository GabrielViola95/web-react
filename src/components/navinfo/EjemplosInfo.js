import ospobsesiva from '../../assets/miniaturas/ospobsesiva.jpg';

const EjemplosInfo = () => {
  return (
    <div className="Info-table">
    <h2 className='title-info-others'>Ejemplos de O.S.P. <i className="fa-brands fa-youtube"></i> </h2>
    <p className='description-info'>En nuestro <span className='mark-bold underline'><a target="_blank" href="https://www.youtube.com/channel/UCaMiKcibLN6N04Cfogz8Pcw" >canal de youtube</a></span> también intentamos conectarte con la teoría mostrandote ejemplos claros usando tus programas favoritos. </p>

    <p className='description-info'>Los personajes ficcionales que tomamos de ejemplo resultan prácticos para digerir los conceptos que se pretenden. En general, sin caer en la teatralización o en la fantasía, las series cuentan con un excelente desarrollo de personajes y nos ofrecen un amplio repertorio de tonalidades, experiencias y organizaciónes personales que con mucho gusto nos pondremos a analizar. En un punto, se podría pensar que la obra refleja al artista y que, por tanto, más que analizar al personaje nos encontremos indagando al genio detrás de la obra. No obstante, eso ya se lo dejamos a ustedes. Nosotros nos ocuparemos del personaje (¿o de los actores que los interpretan?).</p>
    
    {/* Video */}
    <h2 className='title-videos-osp'>Charles Mcgill de Better Call Saul ¿Cómo es una O.S.P. OBSESIVA?</h2>
    <img src={ospobsesiva} alt='Guidano Entrevista Cristián-Warnken' />
    <p className='description-info'>Bienvenidos, hoy vamos a hablar de la Organización de Significado Personal Obsesiva. Vamos a entender cómo piensan, sienten y se comportan las personas que podemos llamar Obsesivas. En particular, en este video se va a analizar a Charles Mcgill, un personaje de la serie Better Call Saul que viene muy bien para comprender esta OSP. Tal vez descubras muchas cosas en común con vos mismo o bien te ayude a comprender mejor a las personas de tu entorno con esta Organización. Recuerda que una OSP no es un trastorno mental, sino una herramienta explicativa que nos permite entender la auto-organización de los sujetos. Si te animas, coméntanos qué te pareció el video y si viste la serie no dudes en compartir más detalles acerca de la personalidad de "Chuck".</p>
    <p className='description-info underline align-end'><a target="_blank" href='https://www.youtube.com/watch?v=jMMBhhSx214&t'><i className="fa-brands fa-youtube"></i> Click aquí</a></p>
    {/* Fin video */}

    <p className='description-info'>
        Hasta acá los <span className='mark-bold'>ejemplos didácticos</span> que te ofrecemos, pronto contaremos con más material para que aprendas, conozcas y disfrutes. <i className="fa-solid fa-thumbs-up"></i>
    </p>
</div>
  )
}

export default EjemplosInfo