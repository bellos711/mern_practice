import Pokemon from './Components/Pokemon'
import './App.css';
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);
  
  return (
    <div className="App">
    <Pokemon pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  )
}

export default App;
