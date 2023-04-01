import { useState } from "react";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {

  const [addItem, setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((previousData) => {

      return [...previousData, note]
    })

  };

  const deletIt = (id) => {
    setAddItem((oldData) => 
      oldData.filter((curData, index) => {
        return  index !== id;
         
        
      })

    )
  }
  return (
    <>
      <div className="App">
        <Header />
        <CreateNote passNote={addNote} />

        {
          addItem.map((val, index) => {
            return (
              <Notes
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItems={deletIt}
              />
            )
          })
        }
      </div>
    </>

  );
}

export default App;
