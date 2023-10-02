import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import NoRoute from '../noRoute/NoRoute'
import Header from '../header/Header';
import Main from '../main/Main';
import Auth from '../auth/Auth';
// import TableSale from "../TableSale/TableSale.jsx";

function App() {
  const navigate =useNavigate();

  const { loggedIn } = useSelector((state)=>state.auth);
  // console.log(loggedIn);

  useEffect(()=>{
    loggedIn ? navigate('/') : navigate('/auth')
  },[loggedIn])

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
