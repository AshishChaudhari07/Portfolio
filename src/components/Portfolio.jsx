import React from 'react'
import hospital from '../assets/portfolio/hospital.png'
import bookstore from '../assets/portfolio/bookstore.png'
import pokedex from '../assets/portfolio/pokedex.png'
import tictactoi from '../assets/portfolio/tictactoi.png'
import snack from '../assets/portfolio/snack.png'
import rps from '../assets/portfolio/rps.png'

function Portfolio() {

    const portfolios = [
        {
            id: 1,
            src: hospital,
            code: 'https://github.com/AshishChaudhari07/Medical-Scheduling-System', 
            demo: '' 
        },
        {
            id: 2,
            src: bookstore,
            code: 'https://github.com/AshishChaudhari07',
            demo: ''
        },
        {
            id: 3,
            src: pokedex,
            code: 'https://github.com/AshishChaudhari07/POKEDEX',
            demo: ''
        },
        {
            id: 4,
            src: tictactoi,
            code: 'https://github.com/AshishChaudhari07/tic-tac-toi',
            demo: ''
        },
        {
            id: 5,
            src: snack,
            code: 'https://github.com/AshishChaudhari07/Snack-Game',
            demo: ''
        },
        {
            id: 6,
            src: rps,
            code: 'https://github.com/AshishChaudhari07/Rock-Paper-Scissors',
            demo: ''
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pt-0 pt-10'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolios.map(({ id, src, code, demo }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 h-[166px] w-[309px]' />
                                <div className='flex items-center justify-center'>
                                    <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                        Demo
                                    </button>
                                    <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                        Code
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio
