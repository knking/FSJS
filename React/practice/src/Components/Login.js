import React, { useState } from 'react'
import  "./Style.css"

function Login() {

  const [firstName, setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const  [fullNmae, setFullName]= useState("")

    const ClickMe = (e)=>{
         setFirstName(e.target.value)
    }
    const ClickMe2 = (e)=>{
          setLastName(e.target.value)
    }
    const sendData= (event)=>{
      event.preventDefault()
   setFullName(firstName+" "+lastName)
    }
   
  return (
    <div>
        <h1>Hello, {fullNmae}</h1> 
      <form>

        <input
        type="text"
        placeholder='Enter your Fisrt name'
        onChange={ClickMe}
        value={firstName}
        />
        <br/>

       <input
        type="text"
        placeholder='Enter your Last Name '
        onChange={ClickMe2}
        value={lastName}
        />
        <br/>
        <button onClick={sendData}>Submit</button>
      </form>

    </div>
  )
}

export default Login
