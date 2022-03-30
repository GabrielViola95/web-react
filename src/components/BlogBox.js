import { Outlet } from "react-router-dom"

const BlogBox = () => {
  return (
    <div className='blogbox-container'>
      <Outlet />
    </div>
  )
}

export default BlogBox