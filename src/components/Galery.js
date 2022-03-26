import Card from "./Card"
import apego from '../assets/miniaturas/apego.jpg'
import emociones from '../assets/miniaturas/emociones.jpg'
import guidano from '../assets/miniaturas/guidano.jpg'

const Galery = () => {
  return (
    <div className='galery-container'>
      <div className="card-wrap">
      <Card title="¿Qué es el Apego?" description="Sin duda alguna, la teoría más famosa de la psicología. Hoy vamos a empezar a contarte algunas cosas sobre ella. Comenzamos a construir la base de un enorme edificio ¡No te lo pierdas!" image={apego} />
      </div>
      <div className="card-wrap">
      <Card title="¿Qué son las Emociones?" description="Hoy vamos a hablar sobre las emociones. Vamos a poner a prueba tu conocimiento como homo psicologicus y ver si sos capaz de reconocer todas las emociones básicas! Y si no, no te preocupes ¡Este video te va a ayudar!" image={emociones} />
      </div>
      <div className="card-wrap">
      <Card title="¿Quién es Vittorio Guidano?" description="El Posracionalista está inspirado directamente con el moderno enfoque de psicoterapia conocido como POSRACIONALISMO. Nombre a su vez asociado a Vittorio Guidano, su creador. Ahora mismo te voy a contar quién es y de donde viene este genio de la mente ¡No te lo pierdas!" image={guidano} />
      </div>
        
        
        
    </div>
  )
}

export default Galery