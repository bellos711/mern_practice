import './App.css';
import {Router, Link} from '@reach/router'

import DisplayAuthors from './views/DisplayAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthors from './views/EditAuthors';

function App() {
  return (
    <div className="App">
      <nav className="mainNav-container">
        <Link to="/authors/new">Add Author</Link>
        <Link to="/authors">All Authors</Link>
      </nav>

      <Router>
        <NewAuthor path="/authors/new"/>
        <DisplayAuthors path="/authors"/>
        <EditAuthors path="/authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
