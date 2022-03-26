import { useState } from "react";
import { Link } from "react-router-dom"

const HeaderInfo = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    };


  return (
      <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
          <i className="fas fa-bars" id="btn-sidebar"></i>
          <i className="fas fa-times" id="cancel-sidebar"></i>
      </label>
    <div className="sidebar">
        <header>
            Información
        </header>
        <ul>
            <li>
                <a href="#" onClick={handleSidebar}><i className="fas fa-qrcode"></i>Conceptos</a>
                <ul className={showSidebar ? "show-sidebar" : "hidden-sidebar"}>
                    <li><Link to="#"> El Self</Link></li>
                    <li><Link to="#"> Las OSP</Link></li>
                    <li><Link to="#"> Constructivismo</Link></li>
                </ul>    
            </li>
            <li><a href="#"><i className="fas fa-link"></i>Investigación</a></li>
            <li><a href="#"><i className="fas fa-stream"></i>Documentos</a> </li>
            <li><a href="#"><i className="fas fa-calendar-week"></i>Curiosidades</a></li>
            <li><a href="#"><i className="fas fa-question circle"></i>Videos</a></li>
            <li><a href="#"><i className="fas fa-sliders-h"></i>Ejemplos OSP</a></li>
            <li><a href="#"><i className="fas fa-envelope"></i>Otros</a></li>
        </ul>
    </div>
    </>
  )
}

export default HeaderInfo