import {useState} from 'react';
import {Link} from 'react-router-dom';
import logoSVG from '../assets/shared/desktop/logo-black.svg'
import '../styles/navbar.css';


const navbar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuOpen, setMenuOpen] = useState(false);

 

    
  return (
    <div className="container">
    <div className="navbar">
        <div className="logo">
        <Link to='/'><img src={logoSVG} alt="" /></Link>
        </div>
        <div className="options">
            <Link to='/stories'>Stories</Link>
            <Link to='/features'>Features</Link>
            <Link to='/pricing'>Pricing</Link>
        </div>
        <div className="invite">
            <button className="invite-btn">Get an invite</button>
            <div className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "ri-close-fill mobile-btn" : "ri-menu-line mobile-btn"}></i>
            </div>
        </div>
    </div>
    <div className={menuOpen ? "dropdown-menu-open" : "dropdown-menu"}>
    <div className="options-mobile">
            <Link to='/stories'>Stories</Link>
            <Link to='/features'>Features</Link>
            <Link to='/pricing'>Pricing</Link>
        </div>
        <div className="invite-mobile">
            <button className="mobile-invite-btn">Get an invite</button>
        </div>
    </div>
    </div>


  )
}

export default navbar