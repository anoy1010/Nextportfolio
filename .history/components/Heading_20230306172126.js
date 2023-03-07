import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-[#003c57] text-[32px] font-bold flex items-center gap-4 py-16'>
        {title}
        <div className='bg-[#003c57] h-[10px] w-[50px] translate-y-1'></div>
    </div>
  )
}

export default Heading