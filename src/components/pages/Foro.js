import BlogBox from '../BlogBox'
import ColumnBlogs from '../ColumnBlogs'
import './Foro.css'

const Foro = () => {
  return (
    <div className='foro-container'>
        <ColumnBlogs />
        <BlogBox />
    </div>
  )
}

export default Foro