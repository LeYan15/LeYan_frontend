import './TableRequest.css'
import TableRequestRow from "../TableRequestRow/TableRequestRow.jsx";

function TableRequest () {
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
            <th>Неделя</th>
            <th>Продажи Факт</th>
            <th>Прогноз</th>
            <th>Разница</th>
            <th>Качество прогноза</th>
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