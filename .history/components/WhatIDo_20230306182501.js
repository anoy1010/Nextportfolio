import React from 'react'
import Heading from './Heading'

const WhatIDo = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Qu'est ce que je fais ?"/>
        <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>
            <div className='Shadow-lgf flex flex-col gap-4 px-8 py-10 bg-[#0594d0] text-white'>
                <h2 className='font-medium text-[20px]'>Lorem ipsum</h2>
                <RiLightbulbFlashFill className=' text-[]'/>
                <p>
                    All of the examples in Tailwind UI rely on the default Tailwind CSS configuration, but some rely on additional first-party plugins like @tailwindcss/forms, @tailwindcss/typography, and @tailwindcss/aspect-ratio.

                    When an example requires any plugins or configuration changes, it will be noted in a comment at the top of the example.

                    If you're new to Tailwind CSS, you'll want to read the Tailwind CSS documentation as well to get the most out of Tailwind UI.
                </p>

            </div>

        </div>

    </section>
  )
}

export default WhatIDo