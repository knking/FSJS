import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './Style.css'
const CreateNote = () => {
  return (
    <>
     <div className='main-div'>
      <div className='create-note'>
        <form>
            <input
            type={"text"}
            placeholder="Title"

            />
            <br></br>
            <textarea rows={" "} column={" "}>

            </textarea>
        </form>
        <Button >
          <AddIcon/>
        </Button>

      </div>
    </div>
    </>
   
  )
}

export default CreateNote;
