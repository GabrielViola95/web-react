import { Link } from "react-router-dom"

const ColumnBlogs = () => {
  return (
    <div className="columnblogs-container">
        <div className="blog-column-wrap">
        <button className="first-btn section-btn btn-link">Secciones</button>
        <button className="section-btn"><Link className="btn-link" to="/foro"> Preguntas Frecuentes</Link> </button>
        <button className="section-btn"><Link className="btn-link" to="/foro"> Comentarios </Link> </button>
        <button className="section-btn final-btn btn-link"> <i className="fa-solid fa-brain"></i> </button>
        </div>
    </div>
  )
}

export default ColumnBlogs