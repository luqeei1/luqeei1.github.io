import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-20 text-center text-4xl capitalize'>Contact Me</h1>
      
      <div className='flex flex-col items-center space-y-4 text-lg text-neutral-400'>
        <p>Email: 
          <a href={`mailto:${CONTACT.email}`} className='text-purple-400 hover:underline ml-2'>
            {CONTACT.email}
          </a>
        </p>
        <p>Phone: 
          <a href={`tel:${CONTACT.phoneNo}`} className='text-purple-400 hover:underline ml-2'>
            {CONTACT.phoneNo}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
