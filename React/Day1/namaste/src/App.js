import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function Counter(){
  let [count, setCount] = useState(100)

  function oneUp(){
     setCount(count + 1)
  }

  return(
    <div>
      <button
      onClick={oneUp}
      >Count : {count}</button>
    
    </div>
  )
}
function App(){
  return (
    <>
    <h1>I am Learning React </h1>
    <button>Click me bro</button>
    <Counter/>
    </>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
