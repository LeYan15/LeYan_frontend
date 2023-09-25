import { Route, Routes } from 'react-router-dom';
import './App.css';
import NoRoute from '../noRoute/NoRoute'
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Route1 from '../route1/Route1';
import Route2 from '../route2/Route2';
import Route3 from '../route3/Route3';

function App() {

  return (
      <Routes>
        <Route path="/" element={ 
          <>
            <Header/>
            <Main/>
            <Footer/>
          </>
        }/>
        <Route path="/route1" element={
          <Route1/>
        }/>
        <Route path="/route2" element={
          <Route2/>
        }/>
        <Route path="/route3" element={
          <Route3/>
        }/>
        <Route path="*" element={<NoRoute/>}/>
      </Routes>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank" rel="noreferrer">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
