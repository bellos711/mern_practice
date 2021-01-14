import logo from './logo.svg';
import './App.css';
import Tabs from "./components/Tabs"

function App() {
  return (
    <div className="App">
      < Tabs tabItems={[
        {label: "Tab1", content: "Tab1 Content"},
        {label: "Tab2", content: "Tab2 Content"},
        {label: "Tab3", content: "Tab3 Content"}
        ]} />
    </div>
  );
}

export default App;
