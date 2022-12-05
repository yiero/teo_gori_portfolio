import logo from '../logo.svg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={"/main"}
          className="App-link"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
