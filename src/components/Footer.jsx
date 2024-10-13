import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-gradient-to-b from-gray-800 to-black w-full text-white py-8 border-t-[0.5px] border-gray-600'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <div className='flex justify-between items-center pb-4 border-b border-gray-600'>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold text-white'>Ashish Chaudhary</h1>
                        <p>Full Stack Developer</p>
                    </div>

                    <div className='flex space-x-6'>
                        <a href='https://instagram.com/yourinstagram' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram size={30} className='hover:text-white hover:scale-105 transition duration-200' />
                        </a>
                        <a href='https://facebook.com/yourfacebook' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook size={30} className='hover:text-white hover:scale-105 transition duration-200' />
                        </a>
                        <a href='https://twitter.com/yourtwitter' target='_blank' rel='noopener noreferrer'>
                            <FaTwitter size={30} className='hover:text-white hover:scale-105 transition duration-200' />
                        </a>
                        <a href='mailto:ashishchaudhari19112003@gmail.com'>
                            <FaEnvelope size={30} className='hover:text-white hover:scale-105 transition duration-200' />
                        </a>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-4'>
                    <p className='text-sm'>
                        © 2024 Ashish Chaudhary. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
