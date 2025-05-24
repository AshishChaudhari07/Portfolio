import React from 'react';
import ashish from '../assets/ashish.png';
import { HiOutlineArrowSmRight } from "react-icons/hi";

function Home() {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-8">
                
                {/* Text Section */}
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-400 py-4 max-w-md">
                        I am a fresher full-stack developer with hands-on experience in building MERN stack projects. 
                        I have developed multiple web applications, including a hospital management system and an online bookstore.
                    </p>
                    <div>
                        <button className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-fit">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <HiOutlineArrowSmRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={ashish}
                        alt="my profile"
                        className="rounded-2xl w-72 md:w-80 shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
