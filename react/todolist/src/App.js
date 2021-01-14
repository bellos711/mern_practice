import React, {useState} from 'react';
import Input from './components/Input';
import Task from './components/Task';
// import TodoForm from './components/TodoForm'
// import DisplayItem from './components/DisplayItem'
import './App.css';

function App() {
  // const [todo, setTodo]= useState({item:""});
  const [list, setList] = useState([]);
  return (
    <div>
      <Input list={list} setList={setList} />
      {list.map((task, i)=>(
        <Task key={i} index={i} task={task} setList={setList} list={list}/>
      ))}
    </div>
  );
}

export default App;
