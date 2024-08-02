
import { IconType } from 'react-icons';
import '../../App.css'

function Featurecard({urlclass ,header,description,Icon}:{urlclass:String,header:string,description:string,Icon:IconType}) {
  return (
    <div className='opacity-95 bg-neutral-100 dark:bg-slate-900'>
      <div className={`${urlclass} flex flex-col gap-3 border p-8 items-center text-center h-full rounded-lg w-full   `}>
      <Icon className='text-4xl'></Icon>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold '>{header}</h1>
        <p className='text-sm  font-extralight '>{description}</p>
      </div>
    </div>
    </div>
  )
}

export default Featurecard