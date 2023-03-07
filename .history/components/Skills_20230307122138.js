import React from 'react'
import Heading from './Heading'


const Skills = () => {
  return (
    <secion>
        <Heading title="Skills" />
        <p className='text-[#003c57] mt-10 mb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <p>React.js</p>
                <div></div>
            </div>
        </div>

    </secion>
  )
}

export default Skills