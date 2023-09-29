//import {useNavigate} from "react-router-dom";
import './TableSale.css'
import TableSaleRow from "../TableSaleRow/TableSaleRow.jsx";

function TableSale () {
  return (
    <section className='table'>
      <table>
        <thead>
        <tr>
          <th>ТК</th>
          <th>Группа товаров</th>
          <th>Категория</th>
          <th>Подкатегория</th>
          <th>Наименование</th>
          <th>Ед. измерения</th>
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