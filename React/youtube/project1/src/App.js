
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Services from './components/Services';

import './style/App.scss'
import './style/header.scss'
import './style/home.scss'
import './style/footer.scss'
import './style/contacts.scss'
import './style/mediaquary.scss'


function App() {
  return (

    <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/services' element={<Services/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
