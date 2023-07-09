import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './context/NotificationContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/checkout'
import './App.css'

function App() {
  const [cart] = useState([])
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a CameraShop!'} />}/>
            <Route path='/category/:id' element={<ItemListContainer greeting={'Bienvenidos a CameraShop!'}/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
