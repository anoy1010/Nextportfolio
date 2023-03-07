import Link from 'next/link'
import React from 'react'
import {TbBookDownload} from 'react-icons/T'

const Navbar = () => {
  return (
    <div className='bg-white fixed top-0 w-[100%] z-10 '>
        <div className='container mx-auto flex justify-between items-center py-4'>
            <div className='text-[24px]'>Job Noh</div>

            <div className='flex gap-6'>

                <Link href='/Acceuil' className='hover:text-[#04bbff]'>
                    Acceuil
                </Link>
                <Link href='/A propos' className='hover:text-[#04bbff]' >
                    A propos
                </Link>
                <Link href='/Portfolio' className='hover:text-[#04bbff]'>
                    Portfolio
                </Link>
                <Link href='/Contact' className='hover:text-[#04bbff]'>
                    Contact
                </Link>

                

            </div>

            <a href='#' className='flex border border-[#04bbff] px-4 py-1 text-[#04bbff] rounded-[5px] items-center gap-2 hover:bg-[#04bbff] hover:text-white transition duration-200 '>Télécharger mon CV</a>
            
        </div>
    </div>
  )
}

export default Navbar