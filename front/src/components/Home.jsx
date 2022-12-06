import logo from '../logo.svg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import imageStussy from '../images/67-679750_stussy-wallpaper-desktop.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imageStussy} id="App-image-background"></img>
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
