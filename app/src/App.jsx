import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a CameraShop!'} />}/>
        <Route path='/category/:id' element={<ItemListContainer greeting={'Bienvenidos a CameraShop!'}/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
