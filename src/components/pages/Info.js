import './Info.css';
import HeaderInfo from '../HeaderInfo';
import { Outlet } from 'react-router-dom';

const Info = () => {
  return (
    <div className='Info__container'>
        <HeaderInfo />
        <Outlet />
    </div>
  )
}

export default Info