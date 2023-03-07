import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import d1 from '../public/d1.jpg'
import bg1 from '../public/bg1.jpg'


const Works = () => {
  return (
    <section className='container mx-auto py-10 px-4' >
        <Heading title="Travaux de création"/>
        <div className=' grid grid-cols-3 gap-4' >
            <div className='row-span-2 relative-group'> 

                <Image  src={d1}  alt="" className='h-[100%]' />
                <div className='bg-[#000000cb] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-200 grid place-items-center text-white'>
                    titre de projet
                </div>
            
            </div>
            <div className='relative-group'> 
            
                <Image  src="/bg1.jpg"  alt="" />
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-[#04bbff]'>
                    titre de projet
                </div>
            
            </div>
            <div className='relative-group'> 
            
                <Image  src="/bg2.jpg"  alt="" />
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-[#04bbff]'>
                    titre de projet
                </div>
            
            </div>
            <div className='relative-group'> 
            
                <Image  src="/bg1.jpg"  alt="" />
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-[#04bbff]'>
                    titre de projet
                </div>
            
            </div>
            <div className='relative-group'> 
            
                <Image  src="/bg2.jpg"  alt="" />
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-[#04bbff]'>
                    titre de projet
                </div>
            
            </div>

        </div>
    </section>
  )
}

export default Works