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
import Account from './pages/account/Account'
import Protected from './component/Protected/Protected'
import NotAuthorized from './component/Protected/NotAuthorized'

import { useEffect } from 'react'
import { useGetCurrentUserQuery } from './store/api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './store/reducer/userSlice'


function App() {
const dispatch=useDispatch()
const {user}=useSelector((state)=> state.user)
const {data, isError, isSuccess, isLoading}=useGetCurrentUserQuery()

  useEffect(()=>{
    if (isSuccess && data) {
      dispatch(addUser(data.data));
    }
  },[data])

  // console.log(data.data)

  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/skin'  element={<Skin/>}/>
        <Route path='/checkout'  element={<Checkout/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        <Route path='/cart'  element={<Cartspage/>}/>
        <Route path='/product/:id'  element={<Product/>}/>
        <Route path='/sun'  element={<ProductImgSlider/>}/>
        <Route path='/403'  element={<NotAuthorized/>}/>
        
        <Route element={<Protected user={user} role="admin"/>}>
           <Route path='/account'  element={<Account/>}/>
        </Route>

        <Route path='*'  element={<NotAuthorized/>}/>
      </Routes>
    </>
  )
}

export default App
