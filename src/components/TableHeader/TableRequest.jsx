import './TableRequest.css'
import TableRequestRow from "../TableRequestRow/TableRequestRow.jsx";
import down from "../../images/chevron-down.svg";

function TableRequest () {
  return (
      <section >
        <table className='table'>
          <thead>
          <tr>
            <th><div className='table__box'>ТК<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Группа товаров<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Категория<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Подкатегория<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Наименование<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Неделя<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Продажи Факт<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Прогноз<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Разница<button className='table__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table__box'>Качество прогноза
              по WAPE  <button className='table__button'>
                <img className='' src={down} alt="альтернативный текст"/>

              </button></div></th>
          </tr>
          </thead>
          <tbody>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>

          </tbody>
        </table>
      </section>
  )
}

export default TableRequest