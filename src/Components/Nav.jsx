import React from 'react'
import {FaApple} from 'react-icons/fa';
import { FiSearch, FiMenu} from 'react-icons/fi';
import {HiOutlineShoppingBag} from 'react-icons/hi2'


const Nav = () => {

    const arrayList = ['Store', 'Mac' , 'IPad' , 'IPhone' , 'Watch', 'Vision' , 'AirPods','Tv&Home', 'Entertainment' , 'Assesscories', 'Support']

  return (
    <>
    <div className='bg-white/70 backdrop-blur text-black shadow-md px-3 py-3 sticky top-0 z-20' >   
      <div className=' mx-auto max-w-[970px]'>
       <ul className='flex items-center justify-between'>
         <FaApple size={20}/>
        {arrayList.map((item, index) => {
            return (
            <li key={index} className='text-xs font-normal hidden md:block'>{item}</li>
          ) 
        })}
       <div className='flex gap-6 items-center'>
       <FiSearch style={{color: "rgb(8, 8, 8)"}} />
       <HiOutlineShoppingBag />
       <FiMenu className='block md:hidden'/>
        </div>
       </ul>
       
        </div>
    </div>
    
    </>
  )
}

export default Nav