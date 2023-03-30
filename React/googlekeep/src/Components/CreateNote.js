import React from 'react'
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

      </div>
    </div>
    </>
   
  )
}

export default CreateNote;
