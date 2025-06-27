import './App.css'
import HeaderBar from './components/HeaderBar/HeaderBar'
import FooterBar from './components/FooterBar/FooterBar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Academia from './pages/Academia'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <HeaderBar className='app-headerbar'/>
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
    </div>
  )
}

export default App
