import { useDispatch } from 'react-redux';
import {authentication} from '../../store/authSlice'

function Auth () {
    const dispatch = useDispatch();
    
    const handleAuth = (e) => {
        e.preventDefault();
        if (e.target[0].value === 'a@a.a' && e.target[1].value === 'a') {
            dispatch(authentication());
        } else {
            e.target[0].value = '';
            e.target[1].value = '';
        }
    }

  return (
    <section className='auth'>
        <form className='auth__form' onSubmit={(e)=>{handleAuth(e)}}>
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