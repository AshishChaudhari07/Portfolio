import React from 'react'
import hospital from '../assets/portfolio/hospital.png'
import bookstore from '../assets/portfolio/bookstore.png'
import pokedex from '../assets/portfolio/pokedex.png'
import tictactoi from '../assets/portfolio/tictactoi.png'
import snack from '../assets/portfolio/snack.png'
// import rps from '../assets/portfolio/rps.png'
import food_delivery from '../assets/portfolio/food_delivery.png'

function Portfolio() {

    const portfolios = [
        {
            id: 1,
            src: hospital,
            code: 'https://github.com/AshishChaudhari07/Medical-Scheduling-System', 
            demo: 'https://medical-scheduling-system-frontent-g55j.onrender.com/' 
        },
        {
            id: 2,
            src: food_delivery,
            code: 'https://github.com/AshishChaudhari07/Food_Delivery',
            demo: 'https://radiant-swan-a2fd51.netlify.app/'
        },
        {
            id: 3,
            src: bookstore,
            code: 'https://github.com/AshishChaudhari07',
            demo: ''
        },
        {
            id: 4,
            src: pokedex,
            code: 'https://github.com/AshishChaudhari07/POKEDEX',
            demo: 'https://searchyourpokemons.netlify.app'
        },
        {
            id: 5,
            src: tictactoi,
            code: 'https://github.com/AshishChaudhari07/tic-tac-toi',
            demo: 'https://tictactoigames.netlify.app/'
        },
        {
            id: 6,
            src: snack,
            code: 'https://github.com/AshishChaudhari07/Snack-Game',
            demo: 'https://snackgameabc.netlify.app'
        },
        // {
        //     id: 7,
        //     src: rps,
        //     code: 'https://github.com/AshishChaudhari07/Rock-Paper-Scissors',
        //     demo: 'https://rpsgamesabc.netlify.app'
        // },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pt-0 pt-[190px]'>
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
