import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    
    return(
        <header>
            <Link className='logo' to='/'>PrimeFlix</Link>
            <Link className='favoritos' to='/favoritos'>meus favoritos</Link>
        </header>
    );
}

export default Header;