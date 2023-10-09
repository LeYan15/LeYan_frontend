import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import NoRoute from '../noRoute/NoRoute'
import Header from '../header/Header';
import Main from '../main/Main';
import Auth from '../auth/Auth';
import {fetchProducts} from '../../store/productsSlice'

function App() {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state)=>state.auth);

  useEffect(()=>{
    loggedIn ? navigate('/') : navigate('/auth')
  },[loggedIn])
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  return (
    <Routes>
      <Route path="/" element={ 
        loggedIn &&
          <>
            <Header/>
            <Main/>
          </>
      }/>
     <Route path="/auth" element={
        <>
          <Header/>
          <Auth/>
        </>
      }/>
      <Route path="*" element={<NoRoute/>}/>
    </Routes>
  )
}

export default App
