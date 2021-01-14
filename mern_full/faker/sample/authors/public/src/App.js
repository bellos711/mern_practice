import React from 'react';
import axios from 'axios';
import PetForm from './components/PetForm';
import Pets from './components/Pets'
import PetDetails from './components/PetDetails';
import { Router } from '@reach/router';
import { Link } from '@reach/router';
import './App.css';
import UpdatePet from './components/UpdatePet';


function App() {
  return (
    <div className="App">
      <Router>
        <PetForm path='/newPet' />
        <Pets path='/'/>
        <PetDetails path='/pets/:id'/>
        <UpdatePet path='/pets/update/:id' />
      </Router>
    </div>
  );
}

export default App;
