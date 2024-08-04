
import { Button } from '../components/ui/button'
import { ModeToggle } from '../components/mode-toggle'
import { TbBrandSupabase } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

import '../App.css'

function Navbar() {
  const navigate=useNavigate();
  return (
    <div className='border-b '>
    <nav className='fixed left-0  right-0  z-50 flex justify-between mx-2 lg:mx-20 md:mx-10 p-3 '>
      <div className=' flex gap-[2rem] items-center'>
        <div onClick={()=>{navigate("/")}}  className='cursor-pointer flex items-center '>
        <TbBrandSupabase className='text-3xl   rounded-md items-center '/> 
        <h1 className='text-xl'>Supabase</h1>
        </div>
      <div className=' hidden md:flex '>      
        <button className='flex items-center p-2 hover:bg-gray-100 rounded-md hover:dark:bg-slate-800'>Product<svg className=" w-6 h-6 transition-transform duration-300 transform hover:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
        </button>
        <button className='flex p-2 items-center hover:bg-gray-100 rounded-md hover:dark:bg-slate-800'>Developers<svg className="w-6 h-6 transition-transform duration-300 transform hover:rotate-180 ">
        <path d="m6 9 6 6 6-6"></path>
        </svg></button>
          <a href="/pricing" className='p-2'>Pricing</a>
          <a href="" className='p-2'>Docs</a>
          <a href="" className='p-2'>Blog</a>
        </div>
      </div>
      <div className='flex gap-2  items-center'>
      <MdMenu className=' text-3xl  md:hidden '></MdMenu>
      <Button onClick={()=>{navigate("/dashboard")}}  className='bg-green-700 h-8 text-xs border border-green-500 bg-opacity-80 text-white '>Dashboard</Button>
      <ModeToggle ></ModeToggle>
      </div>
    </nav>
    </div>
  )
}

export default Navbar