import './HeaderBar.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Main-Logo-White.png'
import Button from '../Button/Button';

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
        <Button message={'Contact'} background='white' onClick={onOpenModal}></Button>
      </div>
    </nav>
  )
}

export default HeaderBar