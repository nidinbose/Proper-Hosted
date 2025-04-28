import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/HomePage/Home';
import MultyStep from './Components/CREUD/Add/MultyStep';
import MultyStepEdit from './Components/CREUD/Edit/MultyStepEdit';
import cardDashboard from './Components/Dashboards/CardDashboard';
import ViewOffer from './Components/Dashboards/ViewOffer';
import Navbar from './Components/HomePage/HomeCompoents/Navbar';
import Footer from './Components/HomePage/HomeCompoents/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

       <Route path='/' Component={Home}/>
       <Route path='/addoffer' Component={MultyStep}/>
       <Route path='/dashboard' Component={cardDashboard}/>
       <Route path='/edit-offer/:id' Component={MultyStepEdit}/>
       <Route path='/viewOffer/:id' Component={ViewOffer}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App