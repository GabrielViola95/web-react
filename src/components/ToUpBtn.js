
const ToUpBtn = () => { 

    const handleScroll = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
          
    }

  return (
    <div onClick={handleScroll} id='to_up_btn' className="show-scroll-btn">
        <i  className='fa fa-angle-up fa-4x'></i>
    </div>
  )
}

export default ToUpBtn