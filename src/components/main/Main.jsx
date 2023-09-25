import { useNavigate } from "react-router-dom";

function Main () {
    const navigate = useNavigate();

  return (
    <main className='main'>
      <ul>
        <li>
          <button onClick={()=>{navigate('/route1')}}>Route1</button>
        </li>
        <li>
          <button onClick={()=>{navigate('/route2')}}>Route2</button>
        </li>
        <li>
            <button onClick={()=>{navigate('/route3')}}>Route3</button>
        </li>
      </ul>
    </main>
  );
}

export default Main