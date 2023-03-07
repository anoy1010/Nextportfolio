import React from 'react'

import Typewriter, { TypewriterClass } from "typewriter-effect"

const Hero = () => {
  return (
    <div className='bg-[url("")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <div className='container mx-auto px-4'>\
            <div className='max-x-[450px] text-[#04bbff] flex flex-col gap-[40px]'>
                <div>
                    <h1 className='text-5xl'>
                        Je suis Noh Job
                    </h1>
                    <h4 className=' text-2xl mt-3'>
                        <Typewriter
                            option = {{
                                strings: [
                                    "Developpeur Front-end",
                                    "Developpeur Back-end",
                                    "Analyste de donnée",
                                    "Chef-projet",
                                    "Graphic-designer",
                                    "Developpeur mobile"
                                ],
                                changeDelay:3,
                                chnageDelete:2,
                                autosatart:true,
                                loop:true,
                            }}   
                        />
                    </h4>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero