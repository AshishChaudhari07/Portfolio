import React from 'react'
import ashish from '../assets/ashish.png'
import { HiOutlineArrowSmRight } from "react-icons/hi";

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full order-2 md:order-1'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Devloper</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a fresher full-stack developer with hands-on experience in building MERN stack projects. I have developed multiple web applications, including a hospital management system and an online bookstore.
                    </p>
                    
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiOutlineArrowSmRight size={25} className='ml-1'/>
                            </span>
                        </button>
                    </div>

                </div>
                <div  className='order-1 md:order-2'>

                    <img src={ashish} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full pt-28 md:pt-0' />
                </div>
            </div>

        </div>
    )
}

export default Home
