import { useNavigate } from "react-router-dom"

function Route1 () {
  const navigate = useNavigate();
  return (
    <section className='route1'>
      <h2>Route1</h2>
      <button onClick={()=>{navigate(-1)}}>назад</button>
    </section>
  )
}

export default Route1
