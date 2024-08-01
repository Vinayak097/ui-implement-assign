import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './usecomponents/Navbar'
import Hero from './usecomponents/Hero'
import CompanyLogos from './usecomponents/CompanyLogos'
import FeaturesSection from './usecomponents/FeaturesSection'
import Database from './usecomponents/featureCards/Database'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
    <main className="container mx-auto px-4 py-8 h-screen">
        <CompanyLogos />
        <Database></Database>
        
        
      </main>
    <div>helse</div>
    </>           
  )
}

export default App
