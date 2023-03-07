import React from 'react'
import Heading from './Heading'


const Works = () => {
  return (
    <section className='container mx-auto py-10 px-4' >
        <Heading title="Travaux de création"/>
        <div className=' grid grid-cols-4 gap-4' >
            <div className='row-span-2 relative-group'> 
                <img  src="/d1.jpg"  alt="" />
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-[#04bbff]'>
                    titre de projet
                </div>
            
            </div>

        </div>
    </section>
  )
}

export default Works