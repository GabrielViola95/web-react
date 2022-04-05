import astronauta from '../../assets/astronauta.png';
import textoPosra from '../../assets/textoPosra.png';
import Psykonautas from '../../assets/Psykonautas.png';

const NotFound = () => {
    return (
        <div className='erro404'>
            <div className='notFound'>
                <img className='notFound__img textoPosra' src={textoPosra} alt="textoPosra guidano psiconauta" />
                <div className="cartel-wrap">
                    <img className='notFound__img cartel' src={Psykonautas} alt="Psykonautas guidano psiconauta" />
                </div>
                <img className='notFound__img astronauta' src={astronauta} alt="astronauta guidano psiconauta" />
            </div>
        </div>
    )
}

export default NotFound