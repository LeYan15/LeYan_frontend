import './TableSale.css'
import TableSaleRow from "../TableSaleRow/TableSaleRow.jsx";
import down from "../../images/chevron-down.svg";
import {useState} from "react";
import Multiselect from "multiselect-react-dropdown";

function TableSale() {
  const [popupOpen, setPopupOpen] = useState([])


  const nameLe = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
  const subcategory = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
  const category = {
    options: [{name: 'Option 1️⃣', id: 1}, {name: 'Option 2️⃣', id: 2}]
  };
  const dim = {
    options: [{name: 'Option ', id: 1}, {name: 'Option ', id: 2}]
  };
  const group = {
    options: [{name: 'Option ', id: 1}, {name: 'Option ', id: 2}]
  };
  const TK = {
    options: [{name: 'Option ', id: 1}, {name: 'Option ', id: 2}]
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
    <section className="table">
      <table className='table-sale'>
        <thead>
        <tr>
          <th className='table__checkbox'>
            <input id="html" type="checkbox"/>
          </th>
          <th className='table__tk'>
            <div className='table__box'>
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
            <div className='table__box'>
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
          <th className='table__group'>
            <div className='table__box'>
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
          <th className='table__group'>
            <div className='table__box'>
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
              displayValue="name"/>
          </th>
          <th className='table__group'>
            <div className='table__box'>
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
              displayValue="name"/>
          </th>
          <th className='table__dim'>
            <div className='table__box'>
              <button onClick={() => handleMultiselect('dim')} className="table__dropbtn">Ед. измерения<img className=''
                                                                                                            src={down}
                                                                                                            alt="альтернативный текст"/>
              </button>
            </div>
            <Multiselect
              className={popupOpen.includes('dim') ? 'table__multi' : 'table__multi_hidden'}
              showCheckbox
              options={dim.options} // Options to display in the dropdown
              selectedValues={dim.selectedValue} // Preselected value to persist in dropdown
              /*onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event*/
              displayValue="name"/>
          </th>

          <th className='table__data'>
            <div className='table__number'>1</div>
            <div className='table__date'>25.10</div>
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