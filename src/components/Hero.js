import youtube from '../assets/youtube.png'
import fondo from "../assets/videos/fondoposracionalismo.mp4"
import { useAuth } from '../context/authContext';

const Hero = () => {
  const {user, logout } = useAuth();

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <div className="Hero-container">
      <video loop autoPlay src={fondo} />
      <div className="acount-wrap">
      <div className="acount-data">
      {!user ? (<><p className='offline'>Desconectado</p></>) 
      : (<>
        <p className='online'>
          {user.name || user.email}
          </p><button onClick={handleLogOut} className='setOffline-btn'>Desconectarse</button>
      </>
      )}
      </div>
      <hr />
      </div>
        <div className="Hero-wrap">
          <div className="first-line">
          <h2 className='text welcome'>Bienvenidos a</h2>
          <div className="Hero-wrap-image">
            <img className='youtube-logo' src={youtube} alt="youtube-logo" />
              </div>
              
          </div>
              
              <h1 className='text title'> <span className='txt-cursive'>el</span>Posracionalista</h1>
              <span className='text webText'>Una web para 
              <ul>
                  <li>aprender</li>
                  <li>descubrir</li>
                  <li>disfrutar</li>
              </ul>
              </span>
        </div>
    </div>
  )
}

export default Hero