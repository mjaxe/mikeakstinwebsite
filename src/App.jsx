import './App.css'
import HeaderBar from './components/HeaderBar/HeaderBar'
import FooterBar from './components/FooterBar/FooterBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <HeaderBar className='app-headerbar'/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <FooterBar className='app-footerbar'/>
    </div>
  )
}

export default App
