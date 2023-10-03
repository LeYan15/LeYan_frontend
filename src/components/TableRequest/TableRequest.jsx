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
            <th><div className='table-request__box'>ТК<select  className='table-request__button'>

              <option> <img className='' src={down} alt="альтернативный текст"/></option>
              <option value="value1" ></option>
            </select ></div></th>
            <th><div className='table-request__box'>Группа товаров<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Категория<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Подкатегория<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Наименование<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Неделя<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Продажи Факт<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Прогноз<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>
              <option value="value1" ></option>
            </select></div></th>
            <th><div className='table-request__box'>Разница<select className='table-request__button'>
              <img className='' src={down} alt="альтернативный текст"/>

            </select></div></th>
            <th><div className='table-request__box'>WAPE  <select className='table-request__button'>
                <img className='' src={down} alt="альтернативный текст"/>

              </select></div></th>
          </tr>
          </thead>

          <tbody >

<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
<TableRequestRow/>
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