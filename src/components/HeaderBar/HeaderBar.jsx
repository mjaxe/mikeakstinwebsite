import './HeaderBar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
function HeaderBar() {
    return (
        <nav className='headerbar'>
            <img className='headerbar-logo' src={logo} alt='Header Bar Logo'/>
            <div className='headerbar-links'>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default HeaderBar