import './App.css'
import HeaderBar from './components/HeaderBar/HeaderBar'
import FooterBar from './components/FooterBar/FooterBar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Academia from './pages/Academia'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Modal from './components/Modal/Modal'
function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='app'>
      <HeaderBar onOpenModal={() => setModalOpen(true)} className='app-headerbar'/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/academia' element={<Academia/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <FooterBar className='app-footerbar'/>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
    </div>
  )
}

export default App
