import './TableRequest.css'
import TableRequestRow from "../TableRequestRow/TableRequestRow.jsx";
import down from "../../images/chevron-down.svg";

function TableRequest () {
  return (
      <section className='table'>
        <table className='table-request'>
          <thead>
          <tr>
            <th>
              <input id="html" type="checkbox"/>
            </th>
            <th><div className='table-request__box'>ТК<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Группа товаров<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Категория<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Подкатегория<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Наименование<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Неделя<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Продажи Факт<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Прогноз<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>Разница<button className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </button></div></th>
            <th><div className='table-request__box'>WAPE  <button className='table-request__button'>
                <img className='' src={down} alt="альтернативный текст"/>

              </button></div></th>
          </tr>
          </thead>

          <tbody className='table-request__body'>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
          </tbody>
            </table>

        <div className='table__buttons'>
          <button className='table__button-prediction'>Прогноз</button>
          <button className='table__button-save'>Сохранить</button>
        </div>
      </section>
  )
}

export default TableRequest