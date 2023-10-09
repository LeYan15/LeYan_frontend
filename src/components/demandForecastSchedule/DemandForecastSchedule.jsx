import { useState } from "react";
import OrangeSquare from "./OrangeSquare";
import BlueSquare from "./BlueSquare";

function DemandForecastSchedule () {

    const firstValuesSelectors = 
    {
        product: 'Группа товаров',
        category: 'Категория',
        subcategory: 'Подкатегория',
        name: 'Наименование',
        unit: 'Ед. изм.',
    }
    
    const [valuesSelectors, setValuesSelectors] = useState(firstValuesSelectors);
    const [isSortTime, setIsSortTime] = useState([true, false, false])
    console.log(valuesSelectors)
    const handleChangeCategory = (e) => {
        const id = e.target.id;
        const value = e.target.value
        setValuesSelectors({...valuesSelectors, [id]: value});
    }
    const setActiveButtons = (e) => {
        switch (e.target.id) {
            case 'day':
                setIsSortTime([true, false, false])
                break;
            case 'week':
                setIsSortTime([false, true, false])
                break;
            case 'month':
            setIsSortTime([false, false, true])
            break;
            default:
                setIsSortTime([true, false, false])
                break;
        }
    }

    return (
      <section className='demandForecastSchedule'>
        <article className='demandForecastSchedule__sort'>
            <ul className='demandForecastSchedule__sortList'>
                <li className='demandForecastSchedule__sortProducts'>
                    <select className='demandForecastSchedule__sortProductsSelect' id='product' onChange={(e) => {handleChangeCategory(e)}}>
                        <option className='demandForecastSchedule__option_hidden' value="">Группа товаров</option>
                        <option value="Группа товаров1">Группа товаров1</option>
                        <option value="Группа товаров2">Группа товаров2</option>
                    </select>
                </li>
                <li className='demandForecastSchedule__sortProducts'>
                    <select className='demandForecastSchedule__sortProductsSelect' id='category' onChange={(e) => {handleChangeCategory(e)}}>
                        <option className='demandForecastSchedule__option_hidden' value="" >Категория</option>
                        <option value="Категория1" >Категория1</option>
                        <option value="Категория2" >Категория2</option>
                    </select>
                </li>
                <li className='demandForecastSchedule__sortProducts'>
                    <select className='demandForecastSchedule__sortProductsSelect' id='subcategory' onChange={(e) => {handleChangeCategory(e)}}>
                        <option className='demandForecastSchedule__option_hidden' value="" >Подкатегория</option>
                        <option value="Подкатегория1" >Подкатегория1</option>
                        <option value="Подкатегория2" >Подкатегория2</option>
                    </select>
                </li>
                <li className='demandForecastSchedule__sortProducts'>
                    <select className='demandForecastSchedule__sortProductsSelect' id='name' onChange={(e) => {handleChangeCategory(e)}}>
                        <option className='demandForecastSchedule__option_hidden' value="" >Наименование</option>
                        <option value="Наименование1" >Наименование1</option>
                        <option value="Наименование2" >Наименование2</option>
                    </select>
                </li>
                <li className='demandForecastSchedule__sortProducts'>
                    <select className='demandForecastSchedule__sortProductsSelect' id='unit' onChange={(e) => {handleChangeCategory(e)}}>
                        <option className='demandForecastSchedule__option_hidden' value="" >Ед. изм.</option>
                        <option value="Ед. изм.1" >Ед. изм.1</option>
                        <option value="Ед. изм.2" >Ед. изм.2</option>
                    </select>
                </li>
            </ul>
            <span className='demandForecastSchedule__hashtag'>{valuesSelectors.product}</span>
            <span className='demandForecastSchedule__hashtag'>{valuesSelectors.category}</span>
            <span className='demandForecastSchedule__hashtag'>{valuesSelectors.subcategory}</span>
            <span className='demandForecastSchedule__hashtag'>{valuesSelectors.name}</span>
            <span className='demandForecastSchedule__hashtag'>{valuesSelectors.unit}</span> 
        </article>
        <article className='demandForecastSchedule__sortTime'>
            <div className='demandForecastSchedule__sortTimeButtons'>
                <button
                    className={`demandForecastSchedule__sortTimeButton ${isSortTime[0] ? 'demandForecastSchedule__sortTimeButton_active' : ''}`}
                    id='day'
                    onClick={(e) => {setActiveButtons(e)}}
                >по дням</button>
                <button
                    className={`demandForecastSchedule__sortTimeButton ${isSortTime[1] ? 'demandForecastSchedule__sortTimeButton_active' : ''}`}
                    id='week'
                    onClick={(e) => {setActiveButtons(e)}}
                >по неделям</button>
                <button
                    className={`demandForecastSchedule__sortTimeButton ${isSortTime[2] ? 'demandForecastSchedule__sortTimeButton_active' : ''}`}
                    id='month'
                    onClick={(e) => {setActiveButtons(e)}}
                >по месяцам</button>
            </div>
            <ul className='demandForecastSchedule__legendList'>
                <li className='demandForecastSchedule__legendPoint'>
                    <OrangeSquare/>
                    <span className='demandForecastSchedule__legendPointText'>Прогноз</span>
                </li>
                <li className='demandForecastSchedule__legendPoint'>
                    <BlueSquare/>
                    <span className='demandForecastSchedule__legendPointText'>Факт продажи</span>
                </li>
            </ul>
        </article>

      </section>
    )
  }
  
  export default DemandForecastSchedule