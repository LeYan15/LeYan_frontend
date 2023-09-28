import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import NoRoute from '../noRoute/NoRoute'
import Header from '../header/Header';
import Main from '../main/Main';
import Auth from '../auth/Auth';

function App() {

  const { logedIn } = useSelector(state=>state.auth);
  
  console.log(logedIn);

  return (
    <Routes>
      <Route path="/" element={ 
        <>
          <Header/>
          <Main/>
        </>
      }/>
      <Route path="/route1" element={ 
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
