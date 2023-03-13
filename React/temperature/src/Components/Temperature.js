import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './style.css'


function Temperature() {

    const [count, setCount] = useState(0)

    const [changeColor, setChangeColor]= useState("cold")

    function Increae() {
        let incTemp = count + 1;
        if(incTemp >8){
            setChangeColor("hot")
            toast.error("Temperatire is very high!",{
                theme: "colored"
            });
        }
       
        setCount(incTemp)
    }

    function Decrease() {
        let decTemp = count - 1;
        if(count <=8){
            setChangeColor("cold")
        }
        setCount(decTemp)
        if(count <=0){
            toast.warning("Temperature is too LOW",{
                theme: "colored"
            })
        }
        
    }


    return (
        <div>

<ToastContainer position='top-center'/>
            <div className='app-container'>

                <div className='temperature-display-container'>

                    <div className={`temperature-display ${changeColor}`}>
                        {count}
                    </div>


                </div>
                <div className='button-container '>
                    <button onClick={Increae}>+</button>
                    <button onClick={Decrease}>-</button>

                </div>
            </div>
        </div>
    )
}

export default Temperature
