import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-10 text-justify'>
                    I am a passionate full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). My journey in web development has been driven by a deep curiosity to understand how the web works and create intuitive, responsive, and user-centric applications.
                </p>

                <br />

                <p className='text-xl text-justify'>
                    With hands-on experience in building real-world projects, including a Hospital Management System and an Online Bookstore, I have developed skills in front-end design using React and Tailwind CSS, and back-end functionality using Node.js, Express, and MongoDB for databases. I am also familiar with using Axios for API calls and Vite for efficient React development.
                </p>

                <br />

                <p className='text-xl text-justify'>
                    I thrive in solving complex problems and am always eager to learn new technologies to stay updated in the ever-evolving world of web development. As a fresher, I am actively seeking opportunities to contribute to exciting projects, work with dynamic teams, and continue honing my skills as a developer.
                </p>
            </div>

        </div>
    )
}

export default About
