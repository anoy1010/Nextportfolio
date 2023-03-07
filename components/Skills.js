import React from 'react'
import Heading from './Heading'


const Skills = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Skills" />
        <p className='text-[#003c57] mt-10 mb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eveLorem Ipsum has been the industry's standard dummy text eveLorem Ipsum has been the industry's standard dummy text eveLorem Ipsum has been the industry's standard dummy text eveLorem Ipsum has been the industry's standard dummy text eveLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        </p>

        <div className='grid   px-10 py-4 grid-cols-2 md:grid-cols-3 gap-6'>
            <div>
                <p>Reactjs</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>
            <div>
                <p>Html & Css</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[90%]'></div>
                </div>
            </div> <div>
                <p>Next js</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[50%]'></div>
                </div>
            </div> <div>
                <p>Js</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[60%]'></div>
                </div>
            </div> <div>
                <p>PHP</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[60%]'></div>
                </div>
            </div>
            <div>
                <p>Adobe AI</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>
            <div>
                <p>Adobe XD</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>
            <div>
                <p>Mindjet project</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[40%]'></div>
                </div>
            </div>
            <div>
                <p>Flutter</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>
            <div>
                <p>React Native</p>
                <div className='relative bg-[#003c57] h-[4px] mt-2'>
                    <div className='bg-[#04bbff] absolute h-[4px] w-[80%]'></div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Skills