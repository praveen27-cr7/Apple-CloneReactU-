import React from 'react'
import hero1 from '../assets/hero_img1.png'
import hero2 from '../assets/hero_img2.png'
import hero3 from '../assets/hero_img3.png'
import herosm1 from '../assets/hero_sm-img1.png'
import herosm3 from '../assets/hero_sm_img3.png'

const Hero = () => {

   const herArray = [{
     name : "iPhone",
     desc : "Meet the lastest iPhone lineup.",
     img : hero1,
     imgSm : herosm1,
     btn : "Shop more"
   }, 
     {
     name : "MacBook Neo",
     desc : "Amazing Mac. Surprising price.",
     img : hero2,
     imgSm : hero2,
     btn : "Buy"
   },
    {
     name : "iPad Air",
     desc : "Now supercharged by M4.",
     img : hero3,
     imgSm : herosm3,
     btn : "Buy"
   }
  ]

  return (

     <>
      {herArray.map((items , index) => {
        return(
          <div key={index}  className='flex items-center justify-center relative mb-2.5 overflow-hidden'>
        <div>
        <img src={items.img} alt="" className='h-[580px] max-w-fit hidden md:block'/>
        <img src={items.imgSm} alt="" className= ' h-[480px] max-w-fit  md:hidden'/>
        </div>
        <div className='absolute top-10 left-1/2 transform -translate-x-1/2 text-center'>
        <h1 className='md:text-5xl text-[32px] font-semibold'>{items.name}</h1>
        <p className='md:text-[28px] text-[16px] '>{items.desc}</p>
        <div className='flex gap-4 justify-center mt-3'>
        <button className='px-5 py-2 bg-[#0076df] text-white rounded-3xl md:text-lg text-sm text-nowrap'>Learn More</button>
        <button className='px-5 py-2 hover:bg-[#0076df] hover:text-white text-[#0076df] border border-[#0076df] rounded-3xl md:text-lg text-sm text-nowrap'>{items.btn}</button>
        </div>
        </div>
    </div>
        )
      })}
     </>
    
  )
}

export default Hero