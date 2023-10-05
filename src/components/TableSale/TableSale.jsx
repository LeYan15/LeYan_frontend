import './TableSale.css'
import TableSaleRow from "../TableSaleRow/TableSaleRow.jsx";
import down from "../../images/chevron-down.svg";

function TableSale() {
  return (
    <section className="table">
      <table className='table-sale'>
        <thead>
        <tr>
          <th className='table__checkbox'>
          <input id="html" type="checkbox"/>
          </th>
            <th className='table__tk'>
            <div className='table__box'>ТК
              <select className='table__button'>
                <img className='' src={down} alt="альтернативный текст"/>
                <option value="value1" ></option>
              </select>
            </div>
          </th>
          <th className='table__group'>
            <div className='table__box'>Группа товаров
              <select className='table__button'>
                <img className='' src={down} alt="альтернативный текст"/>
                <option value="value1" ></option>
              </select>
            </div>
          </th>
          <th className='table__group'>
            <div className='table__box'>Категория
              <select className='table__button'>
                <img className='' src={down} alt="альтернативный текст"/>
                <option value="value1" ></option>
              </select>
            </div>
          </th>
          <th className='table__group'>
            <div className='table__box'>Подкатегория
              <select className='table__button'>
                <img className='' src={down} alt="альтернативный текст"/>
                <option value="value1" ></option>
              </select>
            </div>

          </th>
          <th className='table__group'>
            <div className='table__box'>Наименование
              <select className='table__button'>
                <img className='' src={down} alt="альтернативный текст"/>
                <option value="value1" ></option>
              </select>
            </div>
          </th>
          <th className='table__dim'>
            <div className='table__box'>Ед. измерения
              <select className='table__button'>

                <option value="value1" ></option>

              </select>
            </div>
          </th>

          <th className='table__data'>
            <div className='table__number'>1</div>
            <div  className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>2</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>3</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>4</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>5</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>6</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>7</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>8</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>9</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>10</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>11</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>12</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>13</div>
            <div className='table__date'>25.10</div>
          </th>
          <th className='table__data'>
            <div className='table__number'>14</div>
            <div className='table__date'>25.10</div>
          </th>
        </tr>
        </thead>
      </table>
      <div className="table-request__body">
        <table>
        <tbody>
        <TableSaleRow/>
        <TableSaleRow/>
        <TableSaleRow/>
        <TableSaleRow/>
        <TableSaleRow/>
        <TableSaleRow/>
        <TableSaleRow/>
        <TableSaleRow/>


        </tbody>

      </table>
        </div>
      <div className='table__buttons'>
      <button className='table__button-prediction'>Прогноз</button>
      <button className='table__button-save'>Сохранить</button>
      </div>
    </section>
  )
}

export default TableSale