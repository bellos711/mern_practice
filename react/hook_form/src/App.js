import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import UserForm from "./components/UserForm";
import ResultForm from "./components/ResultForm"

function App() {
const [formState, setFormState] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isSubmitted: false,
})

  return (
    <div className="App">
      <UserForm inputs={formState} setInputState={setFormState}/>
      <ResultForm inputResult={formState} />
    </div>
  );
}

export default App;



