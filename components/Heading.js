import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='text-[#007198] text-[32px] font-bold flex items-center gap-4 py-16'>
        {title}
        <div className='bg-[#007198] h-[5px] w-[40px] translate-y-1 rounded'></div>
    </div>
  )
}

export default Heading