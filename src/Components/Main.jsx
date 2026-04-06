import React from 'react'
import main1 from '../assets/main_img1.png'
import main2 from '../assets/main_img2.png'
import main3 from '../assets/main_img3.png'
import main4 from '../assets/main_img4.png'
import main5 from '../assets/main_img5.png'
import main6 from '../assets/main_img6.png'
import logo1 from '../assets/logo_1.png'
import logo2 from '../assets/logo_2.png'
import logo3 from '../assets/logo_3.png'
import logo4 from '../assets/logo_4.png'

const Main = () => {

  const mainArr = [
    {
      img: main1,
      logo : logo1,
      btn: 'Read the letter from Tim',
      align: 'bottom'
    },
    {
      img: main2,
      desc : "Apple Worldwide Developers Conference. Join us online June 8–12.",
      desccolor : "white",
      btn: 'Learn more',
      align: 'bottom'
    },
    {
      img: main3,
      title: "AirPods Max 2",
      subtitle : "Listening. Remastered.",
      desc : "Available early next month",
      btn: "Learn more",
      btn2 : "Order",
      align: 'bottom'
    },
    {
      img: main4,
      logo : logo2,
      subtitle : "The ultimate way to watch your health.",
      btn: "Learn more",
      btn2 : "Buy",
      align: 'top'
    },
     {
      img: main5,
      logo : logo3,
       logow : "w-[50%]",
      desc : "Get up to $195–$685 in credit when you trade in iPhone 13 or higher.",
      btn: "Get your estimate",
      align: 'top'
    },
     {
      img: main6,
      logo : logo4,
       logow : "w-[35%]",
      desc : "Get up to 3% Daily Cash back with every purchase.",
      btn: "Learn more",
      btn2: "Apply now",
      align: 'top'
    },

  ]
  return (
      

    <div className='grid md:grid-cols-2 grid-cols-1 gap-2.5 px-3'>
       {mainArr.map((items, index) => {
        return(
       <>
          {/*Top align*/}
          {items.align === 'top' && (
             <div key={index} className=' relative  overflow-hidden w-full h-[580px]'>
            <img src={items.img} alt="" className='h-full w-full object-cover '/>
            <div className='absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center gap-1 mx-auto'>
            {items.logo && <img src={items.logo} alt="" className= {`${items.logow ? items.logow : 'w-72'}`}/>}
            {items.title && <h1 className='md:text-5xl text-[32px] font-semibold'>{items.title}</h1>}
            {items.subtitle && <p className=' text-xl whitespace-nowrap'>{items.subtitle}</p>}  
            {items.desc && <p className='max-w-2xl text-[20px]'>{items.desc}</p>}
            <div className='flex gap-4 justify-center mt-3'>
            <button className='px-4 py-2 bg-[#0076df] text-white rounded-3xl  text-md text-nowrap'>{items.btn}</button>
            {items.btn2 && <button className='px-4 py-2 hover:bg-[#0076df] hover:text-white text-[#0076df] border border-[#0076df] rounded-3xl text-md text-nowrap'>{items.btn2}</button>}
            </div>
            </div>
        </div>
          )}
          {/*Bottom align*/}
          {items.align === 'bottom' && (
              <div key={index} className=' relative overflow-hidden w-full h-[580px]'>
            <img src={items.img} alt="" className='h-full w-full object-cover '/>
            <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center gap-1 mx-auto'>
            {items.logo && <img src={items.logo} alt="" className=' h-[108px] mx-auto '/>}
            {items.title && <h1 className='text-[40px] font-semibold leading-none whitespace-nowrap'>{items.title}</h1>}
            {items.subtitle && <p className=' text-xl whitespace-nowrap '>{items.subtitle}</p>}  
           {items.desc &&   <p className={`max-w-xl  ${items.desccolor  === 'white' ? 'text-white font-normal text-xl leading-none' : 'text-[14px] text-gray-500'}`}>
                {items.desc}
             </p>
            }   
            <div className='flex gap-4 justify-center mt-3'>
            <button className='px-4 py-2 bg-[#0076df] text-white rounded-3xl text-md text-nowrap'>{items.btn}</button>
            {items.btn2 && <button className='px-4 py-2 hover:bg-[#0076df] hover:text-white text-[#0076df] border border-[#0076df] rounded-3xl text-md text-nowrap'>{items.btn2}</button>}
            </div>
            </div>
        </div>
          )}
         </>
        )
       })}
    </div>
      
   
  
  )
}

export default Main