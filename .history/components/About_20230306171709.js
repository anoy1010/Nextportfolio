import React from 'react'
import Heading from './Heading'

const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <Heading title="A propos de nous "/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

            <div>
                <img className='w-[400px]' src="/" alt="" />
            </div>
            <div>
                <div className='flex items-center justify-between'></div>
            </div>
        </div>

    </section>
  )
}

export default About