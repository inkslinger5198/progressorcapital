import React from 'react';
import Home from './components/homepage/Homepage';
import Hero from './Pages/Services/s1/hero';
import './App.css';
import Approach from './components/approach/Approach';
import Services from './components/services/Services';

const App = () => {
  return (
    <div>  
      <Home />
      <Approach />
      <Services />
    </div>
  )
}

export default App
