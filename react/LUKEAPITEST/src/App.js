import {StarWars} from './Components/StarWars';
import {useState} from 'react';
import './App.css';

function App() {
  const [resData, setResData]= useState(null);

  const [type, setType]= useState('planets');

  return (
    <div className="App">
      <StarWars resData={resData} setResData={setResData} type={type} setType={setType}/>
    </div>
  );
}

export default App;
