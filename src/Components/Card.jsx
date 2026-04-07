import React from 'react'
import {cards} from '../carddetials.jsx'
import logotv from '../assets/cardimg/appletvlogo.png'

const Card = () => {


    const loopcards = [...cards, ...cards , ...cards]

  return (

    <div className='bg-[#F5F5F7] my-2.5'>
      
      <div>
        <h1 className='text-center font-semibold lg:text-5xl text-3xl pb-2 pt-10'>Endless Entertianment.</h1>
      </div>
    
 
    <div 
     className='flex  gap-3 overflow-x-auto py-5 scrollbar-hide scroll-smooth'>
         {
            loopcards.map((card) => (
                <div
                key={card.id} className='relative group w-full min-w-[250px] max-w-[250px] md:max-w-[250px] md:min-w-[668px] lg:max-w-[668px] lg:min-w-[930px] h-[500px] '>
                    <img src={card.img} className='h-full hidden md:block object-cover ' />
                    
                    
                   <div className=' md:hidden min-w-[250px] max-w-[250px] h-[500px]'>

                    <img src={card.imgmv} className=' w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300' />
                      </div>

                <div className='md:hidden absolute top-6 w-full flex-col items-center justify-center gap-2 flex'>
                    {card.logotv && <img src={logotv} className='w-12' />}
                    <img src={card.logo} />

                </div>
                <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent'>

                    </div>
           
        <div className='absolute bottom-8 md:left-10 left-1/2 -translate-x-1/2 transform md:-translate-x-0 md:transform-none text-white w-full'>
            <ul className='flex flex-col-reverse md:flex-row md:gap-2 lg:text-lg items-center '>
             <li key={card.id} className='text-nowrap bg-white px-3 py-[5px] text-black rounded-2xl mt-2 md:mt-0'>{card.btn ?  <button >{card.btn}</button> : <button>Stream now</button>}</li>
             <li className='hidden md:block'>{card.title && <h4 className='font-bold'>{card.title}</h4>}</li>
             <li className='hidden md:block'><p>{card.dot && <span className='mr-2'>•</span>} {card.desc}</p></li>
             <li className='md:hidden w-full mx-auto text-center px-2 text-[16px]'><p className='w-full'>{card.desc}</p></li>
             
             <li className='md:hidden'>{card.title && <h4 className='font-bold'>{card.title}</h4>}</li>

            </ul>
        </div>
                </div>
            ))
         
         
         }


        
    </div>
  </div>
  )
}

export default Card