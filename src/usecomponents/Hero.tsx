import React from 'react'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'
function Hero() {
  const navigate=useNavigate();
  return (
    <div className=''>
         <main className="px-6 py-12 flex justify-center mt-20">
        <div className=" text-center flex flex-col gap-3 ">
            <div className=''>
            <Button variant="outline" className="mb-4 rounded-full">
            Launch Week 6
          </Button>
          <Button variant="gost" className="text-green-700 mb-4 py-2 pl-4 pr-4 transition-all gap-2 hover:gap-4 hover:pr-2">
            <span>Claim your seat</span> <span className=''>→</span>
          </Button>
            </div>
          
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-normal  mb-4 ">
            Build in a weekend <br /> <span className='text-green-700'>Scale to millions</span>
          </h1>
          <p className="text-lg font-bold  mb-8 line-clamp-3 ">
            Supabase is an open source Firebase alternative.<br></br> Start your project with a Postgres database,
            Authentication, instant APIs, Edge <br></br>Functions, Realtime subscriptions, Storage, and Vector embeddings.
          </p>
          <div>
          <Button onClick={()=>{navigate("/dashboard")}} className="bg-green-600 bg-opacity-80 border border-green-500 text-white">Start your project</Button>
          <Button variant="outline" className="ml-4">
            Documentation
          </Button>

          </div>
          
        </div>
        </main>
    </div>
  )
}

export default Hero