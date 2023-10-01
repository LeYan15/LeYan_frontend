//import {useNavigate} from "react-router-dom";
import './TableSale.css'
import TableSaleRow from "../TableSaleRow/TableSaleRow.jsx";
import down from "../../images/chevron-down.svg";

function TableSale () {
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
          <th><div className='table__box'>Подкатегори<button className='table__button'>
            <img className='' src={down} alt="альтернативный текст"/>

          </button></div>я</th>
          <th><div className='table__box'>Наименование<button className='table__button'>
            <img className='' src={down} alt="альтернативный текст"/>

          </button></div></th>
          <th><div className='table__box'>Ед. измерения<button className='table__button'>
            <img className='' src={down} alt="альтернативный текст"/>

          </button></div></th>
        </tr>
        </thead>
        <tbody>
       <TableSaleRow/>
       <TableSaleRow/>
       <TableSaleRow/>
       <TableSaleRow/>
       <TableSaleRow/>


        </tbody>
      </table>
    </section>
  )
}

export default TableSale