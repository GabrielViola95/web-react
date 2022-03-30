import { Link } from "react-router-dom"

const ColumnBlogs = () => {
  return (
    <div className="columnblogs-container">
        <div className="blog-column-wrap">
            <button className="first-btn section-btn btn-link"><i className="fa-solid fa-users"></i></button>
            <Link className="btn-link" to="afq"> <button className="section-btn">Preguntas Frecuentes </button> </Link>
            <Link className="btn-link" to="mensajes"> <button className="section-btn">Mensajes  </button></Link>
            <button className="section-btn final-btn btn-link"> <i className="fa-solid fa-brain"></i> </button>
        </div>
    </div>
  )
}

export default ColumnBlogs