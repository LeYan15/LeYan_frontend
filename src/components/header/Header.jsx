import { useDispatch, useSelector } from 'react-redux';
import Exit from './Exit';
import {quit} from '../../store/authSlice';
import logo from '../../images/logo.svg'

function Header () {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(state=>state.auth);

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo'/>
      {/* <h1 className='header__heading'>Лента</h1> */}
      {loggedIn && 
        <div className='header__content'>
          <p className='header__date'>
            {new Date().toLocaleDateString("ru-RU", 
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </p>
          <p className='header__name'>Андреев Александр</p>
          <button className='header__buttonExit' onClick={()=>{dispatch(quit())}}>
            <Exit />
          </button>
        </div>
      }
    </header>
  )
}

export default Header
