import React from 'react'

function Login() {
  return (
    <div>
      <form>

        <input
        type="text"
        placeholder='Enter your Fisrt name'
        onChange={ClickMe}
        />
       <input
        type="text"
        placeholder='Enter your Last Name '
        onChange={ClickMe}
        />
      </form>

    </div>
  )
}

export default Login
