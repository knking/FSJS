import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react'

function App() {

  const [count, setCount]= useState(0);

  const decrease = ()=>{
    setCount(count+1)
  }

  const increase = ()=>{
    setCount(count-1)
  }
   
  
  return (
    <div className="App">
     
   <h1>Counter app</h1>

<h2>{count}</h2>
<button onClick={decrease}>Increae</button>
<button onClick={increase}>Decrease</button>
    </div>
  );
}

export default App;
