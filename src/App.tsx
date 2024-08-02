import { useState } from 'react'

import './App.css'
import {   Routes ,Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
function App() {
  

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/' element={<Home></Home>}> </Route>
        </Routes>
      </BrowserRouter>

      
    
    </>           
  )
}

export default App
