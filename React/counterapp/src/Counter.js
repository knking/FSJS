
import React,{useState} from 'react'
import './style.css'

function Counter(){

    const [count ,setCount] = useState(0);

    return(
        <>
        <div className='main'>
            <h1>Total Count</h1>
            <div className='countDiv'>
                 <h2>{count}</h2>
            </div>

            <div>
            <button onClick={()=>count >= 10 ? "": setCount(count+1)}>Increase Count</button>

            <button onClick={()=>count <= 0 ? "": setCount(count - 1)}>Decrease Count</button>

            <button onClick={()=>setCount(0)}>Reset Count</button>
            </div>
        </div>
        </>
    )
}

export default Counter