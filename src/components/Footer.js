import { useForm } from "../hooks/useForm"
import { Link } from "react-router-dom";
import './Footer.css'
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
    email: "",
    issue: "",
    comments: "",
  };
  
  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
  
    if(!form.issue.trim()){
      errors.issue = "El campo 'Asunto' es requerido";
    } else if (!regexName.test(form.issue.trim())) {
      errors.issue = "El campo 'Asunto' solo acepta letras y espacios en blanco";
    }
    if(!form.email.trim()){
      errors.email = "El campo 'E-mail' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'E-mail' es incorrecto";
    }
    if(!form.comments.trim()){
      errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments = "El campo 'Comentarios' acepta hasta 255 caracteres";
    }
  
    return errors;
  };
  
  let styles ={
    fontWeight: "bold",
    color: "#dc3545",
  };


const Footer = () => {

    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);

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
                  
            <form className="form-main" onSubmit={handleSubmit}>
            {errors.email && <p style={styles}>{errors.email}</p>}
                <input type="email" name='email' className='footer-input' placeholder='Tu E-mail' onBlur={handleBlur} onChange={handleChange} value={form.email} required/>   
                {errors.issue && <p style={styles}>{errors.issue}</p>}
                <input onBlur={handleBlur} type="text" name='issue' className='footer-input' placeholder='Asunto' onBlur={handleBlur} 
                    onChange={handleChange} value={form.issue} required/>        
                {errors.comments && <p style={styles}>{errors.comments}</p>}
                <textarea onBlur={handleBlur} className='footer-input textarea' name="comments"  cols="30" placeholder="Comentarios" onBlur={handleBlur} onChange={handleChange} value={form.comments} required></textarea>
                
                <div className="btn-wrap">
                <button type="submit" className="btn-form">Enviar consulta</button>
                {loading && <Loader/>}
                {response && <Message msg="Los datos han sido enviados" bgColor="#198754" />}
                </div>
            </form>
        </div>
            </section>
          <div className="footer-links">
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h2>Canal de Youtube</h2>
                      <Link to='/login' > Cómo funciona</Link>
                      <Link to='/foro/afq' > Post</Link>
                      <Link to='/foro/afq' > Comunidad</Link>
                      <Link to='/info' > Descripción</Link>
                      <Link to='/info/videos' > Videos</Link>
                  </div>
                  <div className="footer-link-items">
                      <h2>Sitio Web</h2>
                      <Link to='/home' > Inicio</Link>
                      <Link to='/info' > información</Link>
                      <Link to='/foro/afq' > foro</Link>
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