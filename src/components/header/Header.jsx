import { useDispatch, useSelector } from 'react-redux';
import Exit from './Exit'
import {quit} from '../../store/authSlice'

function Header () {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state=>state.auth);

  return (
    <header className='header'>
      <h1 className='header__heading'>Лента</h1>
      {loggedIn && 
        <div className='header__content'>
          <p className='header__date'>{new Date().toLocaleDateString()}</p>
          <p className='header__name'>Андреев Александр</p>
          <Exit  className='header__buttonExit' onClick={()=>{dispatch(quit)}}/>
        </div>
      }
    </header>
  )
}

export default Header
