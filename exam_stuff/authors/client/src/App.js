import './App.css';
import React from 'react';
// import axios from 'axios';
import Pets from './components/Pets'
import PetForm from './components/PetForm';
import UpdatePet from './components/UpdatePet';
import PetDetails from './components/PetDetails';
import { Link, Router } from '@reach/router';




function App() {
  return (
    <div className="App">
      <Router>
        <Pets path='/'/>
        <PetForm path='/newPet' />
        <PetDetails path='/pets/:id'/>
        <UpdatePet path='/pets/update/:id' />
      </Router>
    </div>
  );
}

export default App;
