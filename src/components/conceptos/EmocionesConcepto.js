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
      <p className='description-info'>Una emoción es un proceso que se activa cuando el organismo detecta algún
        peligro, amenaza o desequilibrio con el fin de poner en marcha los recursos a su
        alcance para controlar la situación (Fernández-Abascal y Palmero, 1999). Por lo
        tanto, <span className='mark-bold'>las emociones son mecanismos que nos ayudan a reaccionar con rapidez
          ante acontecimientos inesperados que funcionan de manera automática</span>, son
        impulsos para actuar. Cada emoción prepara al organismo para una clase distinta
        de respuesta; por ejemplo, <span className='mark-bold'>el miedo</span> provoca un aumento del latido cardiaco
        que hace que llegue más sangre a los músculos favoreciendo la respuesta de
        huida</p>
      <p className='description-info'>Cada persona experimenta una emoción de forma particular, dependiendo de
        sus experiencias anteriores, su aprendizaje y de la situación concreta. Algunas
        de las reacciones fisiológicas y comportamentales que desencadenan las emociones
        son innatas, mientras que otras pueden adquirirse.</p>

      <img src={sistemaLimbico} alt='Sistema Limbico' />
      <p className='description-info'>Las emociones se experimentan en el cuerpo y uno de los sistema que regula constantemente su comportamiento es <span className='mark-bold'>el sistema límbico</span>. El sistema límbico es un sistema filogenéticamente antiguo formado por varias estructuras cerebrales complejas que se ubican alrededor del tálamo y por debajo de la corteza cerebral. Es el principal responsable de la vida afectiva.En la actualidad se sabe que <span className='mark-bold'>el sistema límbico está involucrado, junto con otras estructuras más allá de sus límites, en la formación de la memoria, el control de las emociones, las motivaciones, diversos aspectos de la conducta, la iniciativa, la supervivencia del individuo y el aprendizaje </span>. Desde el punto de vista funcional, integra estructuras como la circunvolución cingular, la cisura longitudinal, el septo, el cuerpo mamilar del hipotálamo, el fórnix, el hipotálamo, la amígdala cerebral y el hipocampo.</p>
      <p className='description-info'>Según el catedrático <span className='mark-bold'>Paul Ekman</span> existen 6 emociones básicas universales que tenemos todos los homo psicologicus y compartimos con otras especies. En estas imágenes se encuentran todas las propuestas por este gran investigador. Quiero que intentes reconocerlas a todas… Te animo a ver atentamente la imágen siguiente y cuando creas haber identificado todas las emociones leer los párrafos que siguen. </p>

      <img src={seisEmociones} alt='Emociones Básicas Ekman' />

      <p className='description-info'>La primera imágen que observamos representa la <span className='mark-bold'>IRA</span>: aparece cuando las cosas no salen como queremos o nos sentimos amenazados por
        algo o alguien. Es <span className='mark-bold'>adaptativo</span> cuando impulsa a
        hacer algo para resolver un problema
        o cambiar una situación difícil.
        <span className='mark-bold'>Puede conllevar riesgos de
          inadaptación</span> cuando se expresa
        de manera inadecuada</p>
      <p className='description-info'>La segunda, <span className='mark-bold'>MIEDO</span>: se trata de una anticipación de una amenaza o peligro (real o imaginario) que produce ansiedad, incertidumbre, inseguridad.</p>
      <p className='description-info'> La tercera, el <span className='mark-bold'>ASCO</span>: se refleja con el disgusto o asco hacia aquello que tenemos delante. Nos produce rechazo y solemos alejarnos.</p>
      <p className='description-info'> La cuarta, la <span className='mark-bold'>SORPRESA</span>: Es muy transitoria y nos permite una aproximación cognitiva para saber qué está ocurriendo. Nos ayuda a orientarnos, a saber qué hacer, ante una situación nueva. </p>
      <p className='description-info'>La quinta, la <span className='mark-bold'>ALEGRÍA</span>: puede entenderse como una sensación de bienestar y de seguridad que sentimos cuando conseguimos algún deseo o vemos cumplida alguna ilusión</p>
      <p className='description-info'> Finalmente, la última, la <span className='mark-bold'>TRISTEZA</span>: se trata de pena, soledad, pesimismo ante la pérdida de algo importante o cuando nos han decepcionado.</p>
      <p className='description-info'>
        Según las investigaciones de Ekman, en todas las culturas podemos encontrar estas 6 emociones básicas. Pero también existen otras emociones que si pueden variar y se encuentran ya más influidas por la cultura, son aprendidas y adquiridas: por eso son conocidas como <span className='mark-bold'>Emociones Secundarias</span>. Según esta posición, algunos ejemplos serían <span className='mark-bold'> verguenza, culpa, orgullo, entusiasmo, satisfacción, desprecio, complacencia, placer</span>...
      </p>
      <img src={organismoEmociones} alt='Organismo Emociones Localización' />

      <p className='description-info'>
        Para ir terminando con este resumen sobre las emociones, podríamos destacar la teoría funcional de las emociones. Según muchos autores, <span className='mark-bold'>las emociones</span> tienen alguna función que les confieren utilidad, independientemente del placer o desagrado que puedan generar. Incluso las emociones más desagradables tienen funciones importantes en la adaptación social y el ajuste personal. Así podemos afirmar que tienen al menos <span className='mark-bold'>3 funciones principales</span>.
      </p>
      <p className='description-info'>
        <span className='mark-bold'><i className="fa-solid fa-circle-check"></i> La función ADAPTATIVA:</span> supone que las emociones funcionan tanto como <span className='mark-bold'>facilitadoras de la respuesta apropiada ante las exigencias ambientales, como inductoras de la expresión de la reacción afectiva a otros individuos</span>. Así por ejemplo, según la primera de estas funciones el miedo favorecería la huida o la inmovilidad corporal defensiva y según la segunda función adaptativa, la expresión de miedo podría ser útil para apaciguar una reacción intensa por parte de un agresor.
      </p>
      <p className='description-info'>
        <span className='mark-bold'><i className="fa-solid fa-circle-check"></i> La función SOCIAL:</span> la expresión de las emociones permite <span className='mark-bold'>predecir a las demás personas el comportamiento que vamos a desarrollar y a nosotros el suyo</span>, lo que tiene un indudable valor para las relación interpersonales y para la adaptación al entorno social. En otras palabras, las reacciones emocionales expresan nuestro estado afectivo, pero también regulan la manera en que los demás reaccionan ante nosotros. Igualmente, <span className='mark-bold'>la propia represión de las emociones</span> también tiene una evidente función adaptativa, por cuanto que es socialmente necesaria la inhibición de ciertas reacciones emocionales que podrían alterar las relaciones interpersonales.
      </p>
      <p className='description-info'>
        <span className='mark-bold'><i className="fa-solid fa-circle-check"></i> La función MOTIVACIONAL:</span> la relación entre motivación y emoción es íntima: toda conducta motivada produce una reacción emocional y a su vez la emoción facilita la aparición de unas conductas motivadas y no otras. <span className='mark-bold'>La relación entre motivación y emoción</span> no se limita al hecho de que en toda conducta motivada se producen reacciones emocionales, sino que una emoción puede determinar la aparición de la propia conducta motivada, dirigirla hacia determinado objetivo y hacer que se ejecute con intensidad.
      </p>
      <p className='description-info'>Esta función no depende del tipo de emoción sino de la dimensión de agrado-desagrado de la emoción y de la intensidad de la reacción emotiva. Por ejemplo, la tristeza nos llevaría a realizar una determinada conducta, fundamentalmente de supervivencia (conducta motivada) y que, dependiendo no de la emoción sino de su intensidad y agrado/desagrado puede hacer que la persona llore a solas o que busque compañía.</p>
      <p className='description-info'>
        Hasta acá nuestro resumen de las <span className='mark-bold'>Emociones</span>, espero te haya resultado interesante. <i className="fa-solid fa-thumbs-up"></i>
      </p>
    </div>
  )
}

export default EmocionesConcepto