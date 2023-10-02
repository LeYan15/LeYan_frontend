import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {authentication} from '../../store/authSlice'

function Auth () {
    const dispatch = useDispatch();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailValue = (e) => {
        setEmailValue(e.target.value);
        setEmailError(e.target.validationMessage)
    }
    const handlePasswordValue = (e) => {
        setPasswordValue(e.target.value);
        setPasswordError(e.target.validationMessage)
    }
    const handleAuth = (e) => {
        e.preventDefault();
        if (emailValue === 'a@a.a' && passwordValue === 'aaa') {
            dispatch(authentication());
        } else {
            setEmailValue('');
            setPasswordValue('');
        }
    }

  return (
    <section className='auth'>
        <form className='auth__form' onSubmit={(e)=>{handleAuth(e)}} noValidate>
            <h2 className='auth__heading'>Вход в систему</h2>
            <label>
                <p className='auth__text'>Email</p>
                <input
                    className={emailError === '' ? 'auth__email' : 'auth__email auth__inputError'}
                    name='email'
                    type='email'
                    value={emailValue}
                    onChange={(e)=>{handleEmailValue(e)}}
                    required
                />
                <p className='auth__inputErrorText'>{emailError}</p>
            </label>
            <label>
                <p className='auth__text'>Пароль</p>
                <input
                    className={passwordError === '' ? 'auth__password' : 'auth__password auth__inputError'}
                    name='password'
                    type='password'
                    value={passwordValue}
                    onChange={(e)=>{handlePasswordValue(e)}}
                    minLength={3}
                    required
                />
                <p className='auth__inputErrorText'>{passwordError}</p>
            </label>
            <button className='auth__buttonInput' onSubmit={(e)=>{handleAuth(e)}} >Вход</button>
        </form>
    </section>
  )
}

export default Auth