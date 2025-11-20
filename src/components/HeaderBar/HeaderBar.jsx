import './HeaderBar.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Main-Logo-White.png'
import Button from '../Button/Button';
import { useState, useRef, useEffect } from 'react';
function HeaderBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPage = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const contact = () => {
    const mailtoString = import.meta.env.VITE_MAILTO_STRING
    window.location.href = mailtoString;
  }

  return (
    <nav className='headerbar'>
      <div className='desktop-headerbar-left-content'>
        <img className='headerbar-logo' src={logo} alt='Header Bar Logo' />
        <div className='desktop-headerbar-links'>
          <Link className={`link ${currentPage.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          <Link className={`link ${currentPage.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
          <Link className={`link ${currentPage.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">Portfolio</Link>
          <Link className={`link ${currentPage.pathname === '/academia' ? 'active' : ''}`} to="/academia">Academia</Link>
        </div>
      </div>
      <div className='desktop-headerbar-right-content'>
        <Button message={'Contact'} background='white' onClick={contact}></Button>
      </div>
      <div className='mobile-headerbar'>
        <button
          className='mobile-hamburger-toggle'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ref={buttonRef}
        >
          <svg
            className='hamburger-icon'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="6" y1="8" x2="26" y2="8" />
            <line x1="6" y1="16" x2="26" y2="16" />
            <line x1="6" y1="24" x2="26" y2="24" />
          </svg>
        </button>
        <div
          className={`mobile-headerbar-links ${mobileMenuOpen ? 'open' : ''}`}
          ref={menuRef}
        >
          <Link className={`link mobile-link ${currentPage.pathname === '/' ? 'active' : ''}`} to="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</Link>
          <Link className={`link mobile-link ${currentPage.pathname === '/about' ? 'active' : ''}`} to="/about" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</Link>
          <Link className={`link mobile-link ${currentPage.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Portfolio</Link>
          <Link className={`link mobile-link ${currentPage.pathname === '/academia' ? 'active' : ''}`} to="/academia" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Academia</Link>
          <Link className={'link mobile-link'} onClick={() => {
            contact();
            setMobileMenuOpen(!mobileMenuOpen);
          }}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default HeaderBar