// import down from "../../images/chevron-down.svg";
import { useState } from "react";

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
    console.log(valuesSelectors)
    const onChange = (e) => {
        const id = e.target.id;
        const value = e.target.value
        setValuesSelectors({...valuesSelectors, [id]: value});
    }

    return (
      <section className='demandForecastSchedule'>
        <ul className='demandForecastSchedule__list'>
            <li className='demandForecastSchedule__sortProducts'>
                <select className='demandForecastSchedule__sortProductsSelect' id='product' onChange={(e) => {onChange(e)}}>
                    <option className='demandForecastSchedule__option_hidden' value="">Группа товаров</option>
                    <option value="Группа товаров1">Группа товаров1</option>
                    <option value="Группа товаров2">Группа товаров2</option>
                </select>
            </li>
            <li className='demandForecastSchedule__sortProducts'>
                <select className='demandForecastSchedule__sortProductsSelect' id='category' onChange={(e) => {onChange(e)}}>
                    <option className='demandForecastSchedule__option_hidden' value="" >Категория</option>
                    <option value="Категория1" >Категория1</option>
                    <option value="Категория2" >Категория2</option>
                </select>
            </li>
            <li className='demandForecastSchedule__sortProducts'>
                <select className='demandForecastSchedule__sortProductsSelect' id='subcategory' onChange={(e) => {onChange(e)}}>
                    <option className='demandForecastSchedule__option_hidden' value="" >Подкатегория</option>
                    <option value="Подкатегория1" >Подкатегория1</option>
                    <option value="Подкатегория2" >Подкатегория2</option>
                </select>
            </li>
            <li className='demandForecastSchedule__sortProducts'>
                <select className='demandForecastSchedule__sortProductsSelect' id='name' onChange={(e) => {onChange(e)}}>
                    <option className='demandForecastSchedule__option_hidden' value="" >Наименование</option>
                    <option value="Наименование1" >Наименование1</option>
                    <option value="Наименование2" >Наименование2</option>
                </select>
            </li>
            <li className='demandForecastSchedule__sortProducts'>
                <select className='demandForecastSchedule__sortProductsSelect' id='unit' onChange={(e) => {onChange(e)}}>
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
      </section>
    )
  }
  
  export default DemandForecastSchedule