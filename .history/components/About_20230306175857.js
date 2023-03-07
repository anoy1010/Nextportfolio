import React from 'react'
import Heading from './Heading'


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
                <img className='w-[400px]' src="/" alt="" />
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
                    <h2 className=''></h2>

                </div>
            </div>
        </div>

    </section>
  )
}

export default About