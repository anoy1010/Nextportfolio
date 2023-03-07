import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Image from 'next/image'
import d1 from '../public/d1.png'

import {AiOutlineGift} from 'react-icons/ai'
import {TfiBook} from 'react-icons/tfi'
import {SlGlobe} from 'react-icons/sl'
import {CiLocationOn} from 'react-icons/ci'
import {GiLevelEndFlag} from 'react-icons/gi'

const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>

        <Heading title="A propos"/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

            <div>
                <Image className='w-[500px] h-[600px]' src={d1} alt="" />
            </div>
            <div>
                <div className='flex items-center justify-between w-[450px]'>
                    <div className='flex flex-col gap-6'>
                        
                        <div className='flex gap-4 items-center font-medium '>
                            <AiOutlineGift className='text-[#04bbff] text-[26px]' />
                            Date d'anniversaire :
                        </div>
                        <div className='flex gap-4 items-center font-medium '>
                            <TfiBook className='text-[#04bbff] text-[26px]' />
                            Etude :
                        </div>
                        <div className='flex gap-4 items-center font-medium '>
                            <GiLevelEndFlag className='text-[#04bbff] text-[26px]' />
                            Niveau :
                        </div>
                        <div className='flex gap-4 items-center font-medium '>
                            <CiLocationOn className='text-[#04bbff] text-[26px]' />
                            localisation :
                        </div>
                        <div className='flex gap-4 items-center font-medium '>
                            <SlGlobe className='text-[#04bbff] text-[26px]' />
                            Site :
                        </div>

                    </div>

                    

                    <div className='flex flex-col gap-6 text-[#051c24]-600'>
                        <div>10/10/****</div>
                        <div>Université Virtuelle de Côte d'Ivoire</div>
                        <div>Master I</div>
                        <div>Abidjan/Bouaké</div>
                        <div>Www.monsite.com</div>


                    </div>

                </div>

                <div className='max-w-[800px]'>
                    <h2 className='font-bold mt-16 mb-10'>
                        Je suis Job Noh et Developpeur d'Application et e-Services. 
                    </h2>
                    <p className='text-[#007198]'>
                         All of the examples in Tailwind UI rely on the default Tailwind CSS configuration, but some rely on additional first-party plugins like @tailwindcss/forms, @tailwindcss/typography, and @tailwindcss/aspect-ratio.

                        When an example requires any plugins or configuration changes, it will be noted in a comment at the top of the example.

                        If you're new to Tailwind CSS, you'll want to read the Tailwind CSS documentation as well to get the most out of Tailwind UI.

                    </p>
                    <Button link="#" text="Embauchez-moi"/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About