
import React from 'react'

//here dynamic data goes into button
const Button = ({ title= "nothing"  })=>(
<>
<button className='btn'>{title}</button>
</>
);

export default Button