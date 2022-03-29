import { Link } from "react-router-dom";
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    "Somos expresiones de un número incalculable de realidades personales en competencia" <small>M. Mahoney</small> 
                </p>
                <p className="footer-subscription-text">
                  Puedes consultarnos por aquí <i className="fa-solid fa-arrow-down"></i>
              </p>
              <div className='input-areas'>
                  
            <form className="form-main" >
                <input type="email" name='email' className='footer-input' placeholder='Tu E-mail' />   
                <input type="text" name='issue' className='footer-input' placeholder='Asunto' />        
                <textarea className='footer-input textarea' name="comments"  cols="30" placeholder="Comentarios"></textarea>
                <div className="btn-wrap">
                <button className="btn-form">Enviar consulta</button>
                </div>
            </form>
        </div>
            </section>
          <div className="footer-links">
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h2>Canal de Youtube</h2>
                      <Link to='/sign-up' > Cómo funciona</Link>
                      <Link to='/' > Post</Link>
                      <Link to='/' > Comunidad</Link>
                      <Link to='/' > Descripción</Link>
                      <Link to='/' > Videos</Link>
                  </div>
                  <div className="footer-link-items">
                      <h2>Sitio Web</h2>
                      <Link to='/home' > Inicio</Link>
                      <Link to='/info' > información</Link>
                      <Link to='/foro' > foro</Link>
                      <Link to='/contacto' > Contacto</Link>
                  </div>
              </div>
          </div>
          <section className="social-media">
              <div className="social-media-wrap">
                  <div className="footer-logo">
                      <a href='https://www.youtube.com/channel/UCaMiKcibLN6N04Cfogz8Pcw' target="_blank" className='social-logo'>
                          elPosracionalista <i className="fa-solid fa-brain"></i>
                      </a>
                  </div>
                  <small className="website-rights"> elPosracionalista © 2022 </small>
                  <div className="social-icons">
                      <a className="social-icon-link youtube"
                      href='https://www.youtube.com/channel/UCaMiKcibLN6N04Cfogz8Pcw'
                      target='_blank'
                      aria-label='Youtube'
                      > <i className="fab fa-youtube"></i>   </a>
                  </div>
              </div>
          </section>
        </div>
        
    )
  }

export default Footer