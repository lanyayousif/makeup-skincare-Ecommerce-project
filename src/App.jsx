import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Skin from './pages/skin/Skin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/skin'  element={<Skin/>}/>
        <Route path='*'  element={<Home/>}/>
      </Routes>
      
    </>
  )
}

export default App
