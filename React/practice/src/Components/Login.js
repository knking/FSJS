import React, { useState } from 'react'
import  "./Style.css"

function Login() {

  // const [firstName, setFirstName]= useState("")
  // const [lastName,setLastName]= useState("")
  // const  [fullNmae, setFullName]= useState("")

  const [values,setValues]= useState({
    firstName:"",
    lastName:"",
    number:"",
  });

    const ClickMe = (event)=>{
        //  setFirstName(e.target.value)
        // setValues({...values,firstName:e.target.value,lastName:e.target.value})

        const {name,value} = event.target;
        console.log(event.target)

    
    // const ClickMe2 = (e)=>{
    //       // setLastName(e.target.value)
    //       setValues({...values,lastName:e.target.value})
    // }

    setValues((preValue)=>{
      return{
       ...preValue,
      [name]: value

      }   
    })
  }
    const sendData= (event)=>{
       event.preventDefault()
  //  setFullName(firstName+" "+lastName)
  console.log(values)
    }
   
  return (
    <div>
        <h1>Hello</h1> 
        <p>{values.firstName}</p>
        <p>{values.lastName}</p>
        <p>{values.number}</p>
      <form>

        <input
        type="text"
        placeholder='Enter your Fisrt name'
        onChange={ClickMe}
        // value={firstName}
        name="firstName"
        value={values.firstName}
        />
        <br/>

       <input
        type="text"
        placeholder='Enter your Last Name '
        onChange={ClickMe}
        // value={lastName}
        name="lastName"
        value={values.lastName}
        />
        <br/>
        <input
        type="nmber"
        placeholder='Enter your mobile '
        onChange={ClickMe}
        // value={lastName}
        name="number"
        value={values.number}
        />
        <br/>
        <button onClick={sendData}>Submit</button>
      </form>

    </div>
  )
}

export default Login
