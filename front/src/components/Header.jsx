import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return(
        <header>
            <div id="header">
                <Link to ="/main" style={{ textDecoration: 'none' }} id="title_header"><h1>TeoHOMEPAGE</h1></Link>
            </div>
        </header>
    )
}

export default Header;