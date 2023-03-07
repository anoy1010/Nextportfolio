import React from 'react'
import Heading from './Heading'
import {AiOutlineGift} from 'react-icons/ai'

const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <Heading title="A propos"/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

            <div>
                <img className='w-[400px]' src="/" alt="" />
            </div>
            <div>
                <div className='flex items-center justify-between w-[300px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4 items-center font-medium '>
                            <AiOutlineGift className='text-[#04bbff] text-[22px]' />
                            Date d'anniversaire
                        </div>
                        <div className='flex gap-4 items-center font-medium '>
                            <AiOutlineGift className='text-[#04bbff] text-[22px]' />
                            Date d'anniversaire
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About