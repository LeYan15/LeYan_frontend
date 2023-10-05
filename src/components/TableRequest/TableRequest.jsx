import './TableRequest.css'
import TableRequestRow from "../TableRequestRow/TableRequestRow.jsx";
import down from "../../images/chevron-down.svg";

function TableRequest () {
  return (
      <div className='table'>
        <table className='table-request'>
          <thead>
          <tr>
            <th className='table__checkbox'>
              <input  id="html" type="checkbox"/>
            </th>
            <th className='table__tk'><div className='table-request__box'>ТК<select  className='table-request__button'>
              <option> <img className='' src={down} alt="альтернативный текст"/></option>
              <option value="value1" ></option>
            </select ></div></th>
            <th className='table__group'><div className='table-request__box'>Группа товаров<select className='table-request__button'>
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
            <th><p className='table-request__box'>Продажи Факт</p></th>
            <th><p className='table-request__box'>Прогноз</p></th>
            <th><p className='table-request__box'>Разница</p></th>
            <th><p className='table-request__box'>WAPE</p></th>
          </tr>
          </thead>
        </table>
        <div className="table-request__body">
            <table>
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
          </div>
        <div className='table__buttons'>
          <button className='table__button-prediction'>Прогноз</button>
          <button className='table__button-save'>Сохранить</button>
        </div>
      </div>
  )
}

export default TableRequest