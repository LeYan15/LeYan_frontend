import { useState } from "react";
import TableSale from "../TableSale/TableSale.jsx";
import TableRequest from "../TableRequest/TableRequest.jsx";
import Forecast from "../forecast/Forecast";
// import ForecastQuality from "../forecastQuality/forecastQuality";

function Main () {
  const headingPage = ['Прогноз продаж продукции собственного производства', 'Качество прогноза спроса', 'График прогноза спроса']
    const [numberPage, setNumberPage] = useState(1);

    const renderPage = (numberPage) => {
      console.log(numberPage);
      switch (numberPage) {
        case 1:
          return <TableSale/>
        case 2:
          return <TableRequest/>
        case 3:
          return <Forecast/>
        default:
          return <Forecast/>
      }
    }

    console.log(numberPage)
  return (
    <main className='main'>
      <h2 className='main__heading'>{headingPage[numberPage-1]}</h2>
      <div className='main__sort'>
        <label className='main__sortCity'>
          <select className='main__sortCitySelect'>
            <option className='main__option_hidden' value="">Выберите город</option>
            <option value="city1">Город1</option>
            <option value="city2">Город2</option>
          </select>
        </label>
        <label className='main__sortTk'>
          <select className='main__sortTkSelect'>
            <option className='main__option_hidden' value="">Выберите  ТК</option>
            <option value="tk1">TK1</option>
            <option value="tk2">TK2</option>
          </select>
        </label>
        <label className='main__sortMemorize'>
          <input className='main__sortMemorizeCheckbox' type='checkbox'/>
          <div className='main__sortMemorizeIcon'></div>
          <p className='main__sortMemorizetext'>Запомнить</p>
        </label>
      </div>
      <nav>
        <ul className='main__menu'>
          <li className={`main__menuPoint ${numberPage === 1 ? 'main__menuPoint_active' : ''}`}>
            <button  className='main__menuButton' onClick={()=>{setNumberPage(1)}}>{headingPage[0]}</button>
          </li>
          <li className={`main__menuPoint ${numberPage === 2 ? 'main__menuPoint_active' : ''}`}>
            <button className='main__menuButton' onClick={()=>{setNumberPage(2)}}>{headingPage[1]}</button>
          </li>
          <li className={`main__menuPoint ${numberPage === 3 ? 'main__menuPoint_active' : ''}`}>
              <button className='main__menuButton' onClick={()=>{setNumberPage(3)}}>{headingPage[2]}</button>
          </li>
        </ul>
      </nav>
      {renderPage(numberPage)}

    {/* import { useNavigate } from "react-router-dom";
    import {useState} from "react";
    import sale from './../../images/Frame 632.svg'
    import request from './../../images/Frame 633.svg'
    import graph from './../../images/Frame 634.svg'
    import TableSale from "../TableSale/TableSale.jsx";
    import TableRequest from "../TableRequest/TableRequest.jsx";
    import './main.css'
    function Main () {

    const [buttonsChoose, setButtonsChoose] = useState("")
      return (
        <main className='main'>
          <p>Прогноз продаж продукции собственного производства</p>
          <div>
          <select value='Выберете город' id="city" >
            <option value="">Выберете город</option>
            <option value="1">Выберите город</option>
          </select>
            <select value='Выберете ТК' id="tk" >
              <option value="">Выберете ТК</option>
              <option value="1">Выберите ТК</option>
            </select>
    </div>
          <nav className=''>
            <button onClick={() => setButtonsChoose("")} className=''>
              <img className='' src={sale} alt="альтернативный текст"/>

            </button>
            <button onClick={() => setButtonsChoose("request")} className=''>
              <img className='' src={request} alt="альтернативный текст"/>
            </button>
            <button onClick={() => setButtonsChoose("graph")} className=''>
              <img className='' src={graph} alt="альтернативный текст"/>
            </button>
          </nav>
          <div className='main__table'>
          {(buttonsChoose === "") && <TableSale/>}

          {(buttonsChoose === "request") && <TableRequest/>}
          </div> */}
    </main>
  );
}

export default Main