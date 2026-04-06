import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Footer = () => {

    const footerList = [[{
    title: 'Shop and Learn',
    list: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Gift Cards']
  },
    {
     title : 'Apple Wallet',
     list: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']

   }],
    [{
        title : 'Account',
        list: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
        title : 'Entertainment',
        list: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books']
    }],
 [   {
        title : 'Apple Store',  
        list: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In', 'Order Status', 'Shopping Help']
    }],
    [{
        title : 'For Business',
        list: ['Apple and Business', 'Shop for Business']
    },
    {
        title : 'For Education',
        list: ['Apple and Education', 'Shop for K-12', 'Shop for College']
    },
    {
        title : 'For Healthcare',
        list: ['Apple in Healthcare']
    },
    {
        title : 'For Government',
        list: ['Apple and Government', 'Shop for Veterans and Military', 'Shop for State and Local Employees', 'Shop for Federal Employees']
    }],
    [{
        title : 'Apple Values',
        list: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation']
    },
    {
        title : 'About Apple',
        list: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
    }]

]
  return (
    <footer className='max-w-[970px] mx-auto bg-[#F5F5F7]'>
        <div className='hidden md:block'>
    <div className='grid grid-cols-5  px-4 '>
        <hr className='col-span-5 ' />
        {footerList.map((col, index) => (
            <div key={index} className='space-y-4 mb-2'>
                {
                    col.map((item, itemIndex) => (
                         <div key={itemIndex} className='text-[12px] my-5 flex flex-col gap-2  '>
                <h3 className='font-semibold'>{item.title}</h3>
                <ul className='flex flex-col gap-2 text-gray-700'>
                    {item.list.map((listItem, listIndex) => (
                        <li key={listIndex} className='hover:underline' >{listItem}</li>
                    ))}
                </ul>
                </div>
                    )
                )}
            
            </div>
        ))}
            </div>
            </div>

            <div className='text-[12px] text-gray-800 px-4 block md:hidden'>
                <hr className='my-5 border-gray-300 border-t'/>
                {footerList.map((col, index) => (

                    <div key={index} >
                          {col.map((item, itemIndex) => (
                            <ul>
                                <li key={itemIndex} className='border-b py-2 flex justify-between items-center'>{item.title}  
                                    <FaChevronDown />
                                </li>
                            </ul>
                          ))}
                    </div>
                ))}
            </div>
       <div className='px-4'>
        <p className='text-[12px] my-4 text-gray-500 w-[70%] md:w-full'>More ways to shop: <a href="" className='text-blue-500 hover:underline'>Find an Apple Store</a> or <a href="" className='text-blue-500 hover:underline'>other retailer</a> near you. Or call <a href="tel:18006927753" className='text-blue-500 hover:underline'>1-800-MY-APPLE </a>(1-800-692-7753).</p>
        <hr className='col-span-5 hidden md:block'/>
         <p className='text-[13px] text-gray-600 hover:underline md:hidden'>United States</p>
        <div className='text-gray-500 text-[13px] my-4 flex justify-between gap-2'>
            <div className='md:flex gap-8'>
             <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
            <ul className='flex gap-2 text-nowrap'>
                <li className='hover:underline'>Privacy Policy | </li>
                <li className='hover:underline'>Terms of Use | </li>
                <li className='hover:underline'>Sales and Refunds | </li>
                <li className='hover:underline'>Legal | </li>
                <li className='hover:underline'>Site Map</li>
            </ul>
            </div>
             <p className='text-gray-600 hover:underline hidden md:block'>United States</p>
        </div>
        </div>
       
    
    </footer>
  )
}

export default Footer