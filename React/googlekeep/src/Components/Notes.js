import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const  Notes = ()=> {

  return (
    <div className='note'>
      <h1>Title</h1>
      <p>I am new notes</p>
      <button >
<DeleteOutlineIcon/>
      </button>
    </div>
  )
}

export default Notes
