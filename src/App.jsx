import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Skin from './pages/skin/Skin'
import Checkout from './pages/cheackout/Checkout'
import Login from './pages/login/Login'
import Signup from './pages/singup/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/skin'  element={<Skin/>}/>
        <Route path='/checkout'  element={<Checkout/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        <Route path='*'  element={<Home/>}/>
      </Routes>
      
    </>
  )
}

export default App
