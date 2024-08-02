import React from 'react'
import databaselogo from '../../assets/databaselogo.png'
import { GoDatabase } from "react-icons/go";
import '../../App.css'
import { IconType } from 'react-icons';
import vector from '../../assets/Vector.svg'
let images={
    "databaselogo":databaselogo,
    "vector":vector

}
function Bigcards({header,description,Icon,img,points}:{header:string,description:string,Icon:IconType,img:string,points:string[]}) {
  return (
    <div className='flex   border w-full rounded-lg opacity-95 bg-neutral-100 dark:bg-slate-900' >
    <div className='flex pl-8 py-8 flex-col  gap-24 max-w-64'>
        <div className='flex flex-col gap-3'>
             
             <Icon className='text-4xl'></Icon>
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-semibold '>{header}</h1>
                <p className='text-sm  font-extralight'>{description}</p>
            </div>
        </div>
        <div className='items'>
            {points.map((point: string )=><div>
                <p>{point}</p>
        </div>)}
    </div>
    </div >
    <div className='  flex items-center'>
        <img src={images[img]} className='h-[400px]' alt="img"/>
    </div>
    </div>
  )
}

export default Bigcards