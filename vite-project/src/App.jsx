import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/HomePage/Home';
import MultyStep from './Components/CREUD/Add/MultyStep';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

       <Route path='/M' Component={Home}/>
       <Route path='/' Component={MultyStep}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App