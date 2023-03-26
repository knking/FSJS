import React from 'react'
import  "./Style.css"

function Login() {

    const ClickMe = (e)=>{
        console.log("I am clicked")
    }
  return (
    <div>
        <h1>Hello</h1>
      <form>

        <input
        type="text"
        placeholder='Enter your Fisrt name'
        onChange={ClickMe}
        />
        <br/>

       <input
        type="text"
        placeholder='Enter your Last Name '
        onChange={ClickMe}
        />
        <br/>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Login
