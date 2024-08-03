import React from 'react'
import { IconType } from 'react-icons'
function ButtonCustom({text,Icon}:{text:string,Icon?:IconType|undefined}) {
  return (
    
        <button className='px-2 py-1  rounded-md flex gap-2 items-center text-black border opacity-80 dark:text-white bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-800 dark:bg-slate-900'>  {text} {Icon?<Icon className='text-xl'></Icon>:""} </button>
    
  )
}

export default ButtonCustom