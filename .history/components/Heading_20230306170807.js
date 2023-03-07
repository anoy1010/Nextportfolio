import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-[#003c57] text-[42px] font-bold flex items-center gap-4 py-16'>
        {title}
        <div className='bg-[##003c57] rounded h-[3px] wid'></div>
    </div>
  )
}

export default Heading