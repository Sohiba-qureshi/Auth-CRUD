import react from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create'
import Read from'./Read'
import Update from'./Update'
import './App.css'; // Importing the CSS file
import Login from './login'
import Signup from './Signup'
import Signout from './Signout'


function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/create' element={<Create />}/>
    <Route path='/read/:id' element={<Read />}/>
    <Route path='/edit/:id' element={<Update />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/' element={<Signup />}/>
    <Route path='/signout' element={<Signout />}/>


   </Routes>
   </BrowserRouter>
  )
}

export default App
