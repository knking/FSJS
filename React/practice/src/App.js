import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Login from './Components/Login';

const App = () => {
  // const [message, setMessage] = useState('');

  // const handleChange = event => {
  //   setMessage(event.target.value);

  //   console.log('value is:', event.target.value);
  // };

  return (
    <div style={{height:'700px',width:'500px', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      {/* <form>
      <input
        type="text"
        id="message"
        name="message"
        placeholder='Enter Color Name'
        onChange={handleChange}
        value={message}
      />
      </form> */}
      {/* <h2>Message: {message}</h2>

      <div style={{height:'50px',width:'80px',border:'1px solid red',backgroundColor:`${message}`}}>

</div> */}

<Login/>
    </div>
  );
};

export default App;

