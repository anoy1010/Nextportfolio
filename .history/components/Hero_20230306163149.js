import React from 'react'

import Typewriter, { TypewriterClass } from "typewriter-effect"

const Hero = () => {
  return (
    <div className='bg-[url("")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <div className='container mx-auto px-4'>\
            <div className='max-x-[450px] text-[#04bbff] flex flex-col gap-[40px]'>
                <div>
                    <h1 className='text-5xl'>
                        Je suis Job Noh
                    </h1>
                    <h4 className=' text-2xl mt-3'>
                        <Typewriter
                            options = {{
                                strings: [
                                    "Developpeur Front-end",
                                    "Developpeur Back-end",
                                    "Analyste de donnée",
                                    "Chef de projet",
                                    "Graphic designer",
                                    "Developpeur mobile"
                                ],
                                changeDelay:3,
                                changeDeleteSpeed:2,
                                autoStart:true,
                                loop:true,
                            }}   
                        />
                    </h4>
                </div>

                <div className='bg-[#0594d0] h-[10px] w-[50px] rounded'>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Hero