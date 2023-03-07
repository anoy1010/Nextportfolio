import React from 'react'
import Button from './Button'
import Heading from './Heading'

const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Contactez-nous"/>
        <form className='flex flex-col gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <input type="text" id="" name="Nom" placeholder="Nom" className='inputStyle' required />
                <input type="email" id="" name="Email" placeholder="Email" className='inputStyle' re />

            </div>
            <input type="text" id="" name="Subject" placeholder="Sujet" className='inputStyle' required />

            <textarea rows="6" placeholder='Message' className='inputStyle' required ></textarea>

            <div>
                <Button link='#' type='submit' className='btn' text="Envoyer un message"/>
            </div>
        </form>


       
    </section>
  )
}

export default Contact