import React from 'react'

function Contact() {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/akkgorla" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input
                 type="text"
                 name='name'
                 placeholder='Enter your name'
                 className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                 />
                <input
                 type="email"
                 name='name'
                 placeholder='Enter your email'
                 className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                 />
                 <textarea
                  name="message" 
                  rows="10" 
                  placeholder='Enter your message'
                  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                 ></textarea>

                 <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
