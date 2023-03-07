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
                <input type="email" id="" name="Email" placeholder="Email" className='inputStyle' required />

            </div>
            <input type="text" id="" name="Subject" placeholder="Subject" className='inputStyle' required />

            <textarea rows=""></textarea>
        </form>


        <Button link='' text="Envoyer un message"/>
    </section>
  )
}

export default Contact