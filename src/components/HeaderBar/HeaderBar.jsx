import './HeaderBar.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Main-Logo-White.png'

function HeaderBar({ onOpenModal }) {
  const currentPage = useLocation();

  return (
    <nav className='headerbar'>
      <div className='headerbar-left-content'>
        <img className='headerbar-logo' src={logo} alt='Header Bar Logo' />
        <div className='headerbar-links'>
          <Link className={`link ${currentPage.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          <Link className={`link ${currentPage.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
          <Link className={`link ${currentPage.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
          <Link className={`link ${currentPage.pathname === '/academia' ? 'active' : ''}`} to="/academia">Academia</Link>
        </div>
      </div>
      <div className='headerbar-right-content'>
        <li className='contact-link-bubble'>
          <Link className="contact-link" onClick={onOpenModal}>Contact</Link>
        </li>
      </div>
    </nav>
  )
}

export default HeaderBar