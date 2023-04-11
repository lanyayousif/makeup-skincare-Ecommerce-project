import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Skin from './pages/skin/Skin'
import Checkout from './pages/cheackout/Checkout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/skin'  element={<Skin/>}/>
        <Route path='*'  element={<Checkout/>}/>
      </Routes>
      
    </>
  )
}

export default App
