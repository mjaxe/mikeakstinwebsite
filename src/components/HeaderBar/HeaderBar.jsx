import './HeaderBar.css'
import { Link } from 'react-router-dom'

function HeaderBar() {
    return (
        <nav className='headerbar'>
            <div className='headerbar-links'>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default HeaderBar