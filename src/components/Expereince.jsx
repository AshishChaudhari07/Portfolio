import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import express from '../assets/expressjs.png'
import mongodb from '../assets/mongodb.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

function Expereince() {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: express,
            title: 'EXPRESSJS',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: mongodb,
            title: 'MONOGODB',
            style: 'shadow-gray-200'
        },
        {
            id: 7,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-500'
        },
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen lg:h-[900px]'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Expereince</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Expereince
