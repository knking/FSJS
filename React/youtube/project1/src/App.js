
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import './style/App.scss'
import './style/header.scss'
import './style/home.scss'
function App() {
  return (

    <Router>
<Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
