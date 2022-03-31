import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderInfo = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    };


  return (
      <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
          <i className="fa fa-info-circle" id="btn-sidebar"></i>
          <i className="fas fa-times" id="cancel-sidebar"></i>
      </label>
      

      
    <div className="sidebar">
        <header>
            Biblioteca
        </header>
        <ul>
            <li>
                <a href="#" onClick={handleSidebar}><i className="fas fa-qrcode"></i>Conceptos</a>
                <ul className={showSidebar ? "show-sidebar" : "hidden-sidebar"}>
                    <li><Link to="posracionalismo">Posracionalismo</Link></li>
                    <li><Link to="emociones">Emociones</Link></li>
                    <li><Link to="self"> El Self</Link></li>
                    <li><Link to="osp"> Las OSP</Link></li>
                    <li><Link to="constructivismo"> Constructivismo</Link></li>
                </ul>    
            </li>
             <li><Link to="investigacion"><i className="fas fa-link"></i>Investigación</Link></li>
            <li><Link to="documentos"><i className="fas fa-stream"></i>Documentos</Link> </li>
            <li><Link to="curiosidades"><i className="fas fa-calendar-week"></i>Curiosidades</Link></li>
            <li><Link to="videos"><i className="fas fa-question circle"></i>Videos</Link></li>
            <li><Link to="ejemplos"><i className="fas fa-sliders-h"></i>Ejemplos OSP</Link></li>
            <li><Link to="otros"><i className="fas fa-envelope"></i>Otros</Link></li>
        </ul>
    </div>
    </>
  )
}

export default HeaderInfo