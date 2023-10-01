import { useState } from "react";
import Forecast from "../forecast/Forecast";
import ForecastQuality from "../forecastQuality/forecastQuality";

function Main () {
  const headingPage = ['Прогноз продаж продукции собственного производства', 'Качество прогноза спроса', 'График прогноза спроса' ]
    const [numberPage, setNumberPage] = useState(1);

    const renderPage = (numberPage) => {
      console.log(numberPage);
      switch (numberPage) {
        case 1:
          return <Forecast/>
        case 2:
          return <ForecastQuality/>
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
    </main>
  );
}

export default Main