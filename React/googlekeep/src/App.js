import { useState } from "react";
import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {

  const addNote =(note)=>{
    alert("i am clicked");
  };

  return (
    <>
      <div className="App">
      <Header/>
      <CreateNote passNote={addNote} />
      {/* <Notes title={values} description="I am learning React"/>
      <Notes title="Krishna" description="I am learning React"/> */}

      <Notes/>
    </div>
    </>
  
  );
}

export default App;
