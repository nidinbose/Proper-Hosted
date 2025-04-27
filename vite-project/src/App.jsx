import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/HomePage/Home';
import MultyStep from './Components/CREUD/Add/MultyStep';
import MultyStepEdit from './Components/CREUD/Edit/MultyStepEdit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

       <Route path='/M' Component={Home}/>
       <Route path='/' Component={MultyStep}/>
       <Route path='/E' Component={MultyStepEdit}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App