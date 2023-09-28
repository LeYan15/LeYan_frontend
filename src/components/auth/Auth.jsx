// import { useDispatch, useSelector } from 'react-redux';
// import Exit from './Exit'
// import {quit} from '../../store/authSlice'

function Auth () {
//   const dispatch = useDispatch();
//   const { logedIn } = useSelector(state=>state.auth);

  return (
    <section className='auth'>
        <form className='auth__form'>
            <h2 className='auth__heading'>Вход в систему</h2>
            <label>
                <p className='auth__text'>Email</p>
                <input  className='auth__email' name='email' type='email'/>
            </label>
            <label>
                <p className='auth__text'>Пароль</p>
                <input  className='auth__password' name='password' type='password'/>
            </label>
            <button  className='auth__buttonInput'>Вход</button>
        </form>
    </section>
  )
}

export default Auth