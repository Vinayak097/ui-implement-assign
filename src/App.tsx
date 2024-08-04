

import './App.css'
import {   Routes ,Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import Home from './pages/Home'
function App() {
  

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        </Routes>
      </BrowserRouter>

      
    
    </>           
  )
}

export default App
