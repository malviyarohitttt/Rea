import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/HomePage/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Doctor from './Components/OurDoctor/OurDoctor'
import Treatment from './Components/Treatment/Treatment'
import Singnin from './Components/SignIn-SingUp/Singnin'
import Singnup from './Components/SignIn-SingUp/Singnup'




function App() {
  return <>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/doctor' element={ <Doctor/> } />
      <Route path='/treatment' element={ <Treatment/> } />
      <Route path='/signin' element={ <Singnin/> } />
      <Route path='/signup' element={ <Singnup/> } />
    </Routes>
  </>
}

export default App
