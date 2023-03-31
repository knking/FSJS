import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Notes(props) {

    const addEvent= ()=>{
        alert("I am clicked")
        const i=10;
    }

  return (
    <div className='note'>
      <h1>Tile</h1>
      <p>This is the content</p>
      <button onClick={addEvent}>
<DeleteOutlineIcon/>
      </button>
    </div>
  )
}

export default Notes
