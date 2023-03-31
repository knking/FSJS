import CreateNote from "./Components/CreateNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {

  const addNote= () =>{
    alert("I am clicked")
  };

  return (
    <div className="App">
      <Header/>
      <CreateNote passNote={addNote}/>
      <Notes/>
    </div>
  );
}

export default App;
