import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Skin from './pages/skin/Skin'
import Checkout from './pages/cheackout/Checkout'
import Login from './pages/login/Login'
import Signup from './pages/singup/Signup'
import Cart from './component/cart/Cart'
import Cartspage from './pages/cart/Cartspage'
import Product from './pages/product/Product'
import ProductImgSlider from './component/ProductImgSlider/ProductImgSlider'

function App() {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/skin'  element={<Skin/>}/>
        <Route path='/checkout'  element={<Checkout/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        <Route path='/cart'  element={<Cartspage/>}/>
        <Route path='/body'  element={<Product/>}/>
        <Route path='/sun'  element={<ProductImgSlider/>}/>
        <Route path='*'  element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
