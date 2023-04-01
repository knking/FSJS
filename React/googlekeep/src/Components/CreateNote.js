import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Style.css'
import Notes from './Notes';

const CreateNote = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: "", 
  })


  const inputValue = (event) => {

    // const value= event.target.value;
    // const name = event.target.value;

    const { name, value } = event.target;


    setNote((previousData) => {
      return {
        ...note,
        [name]: value

      }
    })
  }

  const addEvent = ()=>{
    props.passNote(note)
  };


  return (
    <>
      <div className='main-div'>
        <div className='create-note'>
          <form>
            <input
              type={"text"}
              name="title"
              value={note.title}
              placeholder="Title"
              autoComplete='off'
              onChange={inputValue}
            />
            <br></br>
            <textarea placeholder='Write here....' rows={""} column={""}
              onChange={inputValue}
              value={note.content}
              name="content"
            >
            </textarea>
            <button onClick={addEvent} className='add-btn' >
            <AddIcon className='icon' />
          </button>
          </form>
          

        </div>
      </div>
    </>

  )
}

export default CreateNote;
