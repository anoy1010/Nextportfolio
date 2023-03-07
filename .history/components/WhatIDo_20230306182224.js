import React from 'react'
import Heading from './Heading'

const WhatIDo = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Qu'est ce que je fais ?"/>
        <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>
            <div className='Shadow-lgf flex flex-col gap-4 px-8 py-10 bg-[#0594d0] text-white'>
                <h2 className='font-medium text-[20px]'></h2>

            </div>

        </div>

    </section>
  )
}

export default WhatIDo