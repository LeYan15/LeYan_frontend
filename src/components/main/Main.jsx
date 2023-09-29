import { useNavigate } from "react-router-dom";
import {useState} from "react";
import sale from './../../images/Frame 632.svg'
import request from './../../images/Frame 633.svg'
import graph from './../../images/Frame 634.svg'
import TableSale from "../TableSale/TableSale.jsx";
import TableRequest from "../TableHeader/TableRequest.jsx";
function Main () {
  //  const navigate = useNavigate();
  const [buttonsChoose, setButtonsChoose] = useState("")
  return (
    <main className='main'>
     {/* <ul>
        <li>
          <button onClick={()=>{navigate('/route1')}}>Route1</button>
        </li>
        <li>
          <button onClick={()=>{navigate('/route2')}}>Route2</button>
        </li>
        <li>
            <button onClick={()=>{navigate('/route3')}}>Route3</button>
        </li>
      </ul>*/}

      <p>Прогноз продаж продукции собственного производства</p>
      <div>
       <select value='Выберете город' id="city" >
        <option value="">Выберете город</option>
        <option value="1">Выберите город</option>
      </select>
        <select value='Выберете ТК' id="tk" >
          <option value="">Выберете ТК</option>
          <option value="1">Выберите ТК</option>
        </select>
</div>
      <nav className=''>
        <button onClick={() => setButtonsChoose("")} className=''>
          <img className='' src={sale} alt="альтернативный текст"/>

        </button>
        <button onClick={() => setButtonsChoose("request")} className=''>
          <img className='' src={request} alt="альтернативный текст"/>
        </button>
        <button onClick={() => setButtonsChoose("graph")} className=''>
          <img className='' src={graph} alt="альтернативный текст"/>
        </button>
      </nav>
      {(buttonsChoose === "") && <TableSale/>}

      {(buttonsChoose === "request") && <TableRequest/>}
    </main>
  );
}

export default Main