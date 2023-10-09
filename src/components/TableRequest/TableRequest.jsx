import './TableRequest.css'
import TableRequestRow from "../TableRequestRow/TableRequestRow.jsx";
import down from "../../images/chevron-down.svg";
import Multiselect from 'multiselect-react-dropdown';
import {useState} from "react";

function TableRequest() {
  const [popupOpen, setPopupOpen] = useState([])


  const week = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
  const nameLe = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
const subcategory = {
  options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
};
  const category = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
  const group = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
  const TK = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };


  function handleMultiselect(int) {
    console.log(int)
    if (popupOpen.includes(int)) {
      let tmp = popupOpen.filter(o => o !== int);
      console.log(tmp, 'tpm')
      setPopupOpen(tmp)
    } else setPopupOpen(() => [...popupOpen, int])


  }

  return (
    <div className='table'>
      <table className='table-request'>
        <thead>
        <tr>
          <th className='table__checkbox'>
            <input id="html" type="checkbox"/>
          </th>
          <th className='table__tk'>
            <div className='table-request__box'>
              <button onClick={() => handleMultiselect('tk')} className="table__dropbtn">ТК<img className=''
                                                                                                src={down}
                                                                                                alt="альтернативный текст"/>
              </button>
            </div>
            <Multiselect
              className={popupOpen.includes('tk') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={TK.options} // Options to display in the dropdown
              selectedValues={TK.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/>
          </th>
          <th className='table__group'>
            <div className='table-request__box'>
              <button onClick={() => handleMultiselect('group')} className="table__dropbtn">Группа товаров<img
                className=''
                src={down}
                alt="альтернативный текст"/>
              </button>
            </div>

            <Multiselect
              className={popupOpen.includes('group') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={group.options} // Options to display in the dropdown
              selectedValues={group.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/>
          </th>
          <th className='table__mean'>
            <div className='table-request__box'>
              <button onClick={() => handleMultiselect('category')} className="table__dropbtn">Категория<img
                className=''
                src={down}
                alt="альтернативный текст"/>
              </button>
            </div>
            <Multiselect
              className={popupOpen.includes('category') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={category.options} // Options to display in the dropdown
              selectedValues={category.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/>
          </th>
          <th className='table__mean'>
            <div className='table-request__box'>
              <button onClick={() => handleMultiselect('subcategory')} className="table__dropbtn">Подкатегория<img
                className=''
                src={down}
                alt="альтернативный текст"/>
              </button>
            </div>
            <Multiselect
              className={popupOpen.includes('subcategory') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={subcategory.options} // Options to display in the dropdown
              selectedValues={subcategory.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/></th>

          <th className='table__mean'>
            <div className='table-request__box'>
              <button onClick={() => handleMultiselect('name')} className="table__dropbtn">Наименование<img className=''
                                                                                                            src={down}
                                                                                                            alt="альтернативный текст"/>
              </button>


            </div>
            <Multiselect
              className={popupOpen.includes('name') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={nameLe.options} // Options to display in the dropdown
              selectedValues={nameLe.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/></th>
          <th className='table__140px'>
            <div className='table-request__box'>
              <button onClick={() => handleMultiselect('day')} className="table__dropbtn">Неделя<img className=''
                                                                                                     src={down}
                                                                                                     alt="альтернативный текст"/>
              </button>


            </div>
            <Multiselect
              className={popupOpen.includes('day') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={week.options} // Options to display in the dropdown
              selectedValues={week.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/>
          </th>


          <th className='table__mean'><p className='table-request__box'>Продажи Факт</p></th>
          <th className='table__140px'><p className='table-request__box'>Прогноз</p></th>
          <th className='table__140px'><p className='table-request__box'>Разница</p></th>
          <th className='table__140px'><p className='table-request__box'>WAPE</p></th>
        </tr>
        </thead>
      </table>
      <div className="table-request__body">
        <table>
          <tbody>

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