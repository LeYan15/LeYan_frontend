import { useState } from "react";
import TableSale from "../TableSale/TableSale.jsx";
import TableRequest from "../TableHeader/TableRequest.jsx";
// import Forecast from "../forecast/Forecast";
import Find from './Find.jsx'
import ForecastQuality from "../forecastQuality/forecastQuality";


function Main () {
  const headingPage = ['Прогноз продаж ', 'Качество прогноза спроса', 'График прогноза спроса']
  const [numberPage, setNumberPage] = useState(1);

  const renderPage = (numberPage) => {
    switch (numberPage) {
      case 1:
        return <TableSale/>
      case 2:
        return <TableRequest/>
      case 3:
        return <ForecastQuality/>
      default:
        return <ForecastQuality/>
    }
  }

  return (
    <main className='main'>
      <h2 className='main__heading'>{headingPage[numberPage-1]}</h2>
      <div className='main__sort'>
        <label className='main__sortCity'>
          <select className='main__sortCitySelect'>
            <option className='main__option_hidden' value="">Город</option>
            <option value="city1">Город1</option>
            <option value="city2">Город2</option>
          </select>
        </label>
        <label className='main__sortTk'>
          <select className='main__sortTkSelect'>
            <option className='main__option_hidden' value="">ТК</option>
            <option value="tk1">TK1</option>
            <option value="tk2">TK2</option>
          </select>
        </label>
        <label className='main__sortMemorize'>
          <input className='main__sortMemorizeCheckbox' type='checkbox'/>
          <div className='main__sortMemorizeIcon'></div>
          <p className='main__sortMemorizeText'>Запомнить</p>
        </label>
        <label className='main__sortFindId'>
          <input className='main__sortFindIdInput' type='number' placeholder="Введите ID товара "/>
          <Find className='main__sortFindIdIcon'/>
          {/* <div className='main__sortMemorizeIcon'></div>
          <p className='main__sortMemorizetext'>Запомнить</p> */}
        </label>
      </div>
      <nav>
        <ul className='main__menu'>
          <li className='main__menuPoint'>
            <button
              className={`main__menuButton ${numberPage === 1 ? 'main__menuButton_active' : ''}`}
              onClick={()=>{setNumberPage(1)}}
            >
              {headingPage[0]}
            </button>
          </li>
          <li className='main__menuPoint'>
            <button
              className={`main__menuButton ${numberPage === 2 ? 'main__menuButton_active' : ''}`}
              onClick={()=>{setNumberPage(2)}}
            >
              {headingPage[1]}
            </button>
          </li>
          <li className='main__menuPoint'>
              <button
                className={`main__menuButton ${numberPage === 3 ? 'main__menuButton_active' : ''}`}
                onClick={()=>{setNumberPage(3)}}
              >
                {headingPage[2]}
              </button>
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