import youtube from '../assets/youtube.png'
import fondo from "../assets/videos/fondoposracionalismo.mp4"

const Hero = () => {
  return (
    <div className="Hero-container">
      <video loop autoPlay src={fondo} />
        <div className="Hero-wrap">
          <div className="first-line">
          <h2 className='text welcome'>Bienvenidos a</h2>
          <div className="Hero-wrap-image">
            <img className='youtube-logo' src={youtube} alt="youtube-logo" />
              </div>
              
          </div>
              
              <h1 className='text title'> <span className='txt-cursive'>el</span>Posracionalista</h1>
              <p className='text webText'>Una web para 
              <ul>
                  <li>aprender</li>
                  <li>descubrir</li>
                  <li>disfrutar</li>
              </ul>
              </p>
        </div>
    </div>
  )
}

export default Hero