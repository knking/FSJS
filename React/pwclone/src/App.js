import React from 'react'
import './App.css';
import Banner from './component/banner'
import NavBar from './component/navbar'
import Crowler from './component/crowler'
import Hero from './component/hero'
import Achiver from './component/achiver'
import Hall from './component/hall'


function App() {
  return (
    <div className="App">
      <Banner/>
      <NavBar/>
      <Crowler/>
      <Hero/>
      <Achiver/>
      <Hall/>
    </div>
  );
}

export default App;
