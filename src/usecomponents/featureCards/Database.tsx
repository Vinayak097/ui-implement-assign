import React from 'react'
import databaselogo from '../../assets/databaselogo.png'
let points= ['100% portable', 'Built-in Auth with RLS', 'Easy to extend']
function Database() {
  return (
    <div className='flex p-8'>
    <div className='flex flex-col  gap-20 max-w-64'>
        <div className='flex flex-col gap-2'>
            <div> 📚</div>
            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl font-bold'>Database</h1>
                <p className='text-md  font-extralight'>Every project is a full Postgres database, the world’s most trusted relational database.</p>
            </div>
        </div>
        
        <div className='items'>
            {points.map(point=><div>
                <p>{point}</p>
        </div>)}
    </div>

    </div >
    <div className='  flex items-center'>
        <img className='border h-64' src={databaselogo} alt="img" />
    </div>
    </div>

  )
}

export default Database