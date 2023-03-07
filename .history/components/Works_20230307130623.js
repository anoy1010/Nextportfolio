import React from 'react'
import Heading from './Heading'


const Works = () => {
  return (
    <section className='container mx-auto py-10 px-4' >
        <Heading title="Travaux de création"/>
        <div className=' grid grid-cols-4 gap-4' >
            <div className='row-span-2 relative-group'> 
                <img  src=""  alt="" className='bg-black border-white width-[150px] h-[250px]'/>
                <div className=' bg-white absolute w-[100%] top-0 opacity-0 '/>
            
            </div>

        </div>
    </section>
  )
}

export default Works