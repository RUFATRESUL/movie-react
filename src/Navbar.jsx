import React, { useState } from 'react'
import{FaUser} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import Movie from './assets/images (2).png'
import {Link} from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";


function Navbar() {
    const [accardion1, setAccardion1] = useState(false)
    const [accardion2, setAccardion2] = useState(false)
    const [accardion3, setAccardion3] = useState(false)
    const [open, setOpen] = useState(false)
  return (
    <>
    <div className='bg-black h-10 flex items-center sm:justify-end md:justify-end lg:justify-around xl:justify-around 2xl:justify-around '>
        <div className='hidden sm:hidden md:hidden md:justify-end lg:flex  xl:flex 2xl:flex'>
            <div className='bg-[#9f599b] p-2 w-40'>
                <h1 className='text-white font-bold'>VIP <i className='font-bold text-white'>SWEEPSTAKES</i></h1>
                </div>
                <div className=' p-2'>
                    <strong className='text-orange-500'>$5000 SHOPPING SPREE</strong>
                    <span className='p-3 text-gray-400 font-medium'>Join Movies VIP for a chance to win. Don't forget to join during checkout</span>
                </div>
        </div>
        <div className='text-gray-500 flex items-center justify-center'>
            <FaUser/> 
            <span className='p-1 font-medium'> Login</span>
        </div>
    </div>
    <div className='flex justify-around items-center'>
        <div className='w-20'>
            <img src={Movie} alt="" />
        </div>
        <div className={`${open ? 'sm:opacity-100' : ' sm:opacity-0'} font-bold text-lg sm:fixed sm:flex sm:flex-col sm:justify-start sm:top-0 sm:left-0 sm:w-60 sm:h-screen sm:bg-[#f1f1f1] sm:transition-opacity sm:duration-1000 md:block lg:block xl:block 2xl:block`}>
            <Link className='pl-10 sm:p-3 sm:border-b-2 sm:border-solid sm:border-gray-300 font-medium sm:text-gray-500 sm:text-base' to="/">Home</Link>
            <Link className='pl-10 sm:p-3 sm:border-b-2 sm:border-solid sm:border-gray-300 sm:relative font-medium sm:text-gray-500 sm:text-base relative' to="/movie"
                onMouseEnter={() => setAccardion1(true)}
                onMouseLeave={() => setAccardion1(false)}
            >
                Movie
                <ul  className={` sm:bg-gray-100 sm:w-56 sm:h-20 md:absolute lg:absolute xl:absolute 2xl:absolute left-0 top-16 bg-black text-gray-400 w-60 h-28 p-3 transition-opacity duration-1000 ${
                    accardion1 ? 'md:opacity-100 lg:opacity-100 xl:opacity-100 2xl:opacity-100' : 'md:opacity-0 lg:opacity-0 xl:opacity-0 2xl:opacity-0 sm:hidden'
                }`}>
                    <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Now Playing</li>
                    <li className='sm:p-2 md:border-b-8 md:border-b-orange-500 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:border-b-8 lg:border-b-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:border-b-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:border-b-8 xl:hover:text-orange-500 2xl:border-b-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:border-b-8 2xl:hover:text-orange-500'>Coming Soon</li>
                </ul>
                <button onClick={()=>{setAccardion1(!accardion1)}} className={` sm:absolute sm:top-4 sm:right-3 sm:text-gray-500 md:hidden lg:hidden xl:hidden 2xl:hidden ${accardion1 ? 'rotate-180 sm:duration-300 sm:ease' : ''}`}><FaChevronDown/></button>  
            </Link>
            <Link className='pl-10 sm:p-3 sm:border-b-2 sm:border-solid sm:border-gray-300 sm:relative font-medium sm:text-gray-500 sm:text-base relative' to="/single"
                onMouseEnter={() => setAccardion2(true)}
                onMouseLeave={() => setAccardion2(false)}
            >
                Single Movie
                <ul  className={` sm:bg-gray-100 sm:w-56 sm:h-48 md:absolute lg:absolute xl:absolute 2xl:absolute left-0 top-16 bg-black text-gray-400 w-60 h-52 p-3 transition-opacity duration-1000 ${
                    accardion2 ? 'md:opacity-100 lg:opacity-100 xl:opacity-100 2xl:opacity-100' : 'md:opacity-0 lg:opacity-0 xl:opacity-0 2xl:opacity-0 sm:hidden'
                }`}>
                    <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Full Width & Banner </li>
                    <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Full Width & Banner</li>
                    <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Full Width & Banner</li>
                    <li className='sm:p-2 md:border-b-8 md:border-b-orange-500 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:border-b-8 lg:border-b-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:border-b-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:border-b-8 xl:hover:text-orange-500 2xl:border-b-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:border-b-8 2xl:hover:text-orange-500'>Full Width & Banner</li>
                    
                </ul>
                <button onClick={()=>{setAccardion2(!accardion2)}} className={` sm:absolute sm:top-4 sm:right-3 sm:text-gray-500 md:hidden lg:hidden xl:hidden 2xl:hidden ${accardion2 ? 'rotate-180 sm:duration-300 sm:ease' : ''}`}><FaChevronDown/></button>  

            </Link>
            <Link className='pl-10 sm:p-3 sm:border-b-2 sm:border-solid sm:border-gray-300 sm:relative font-medium sm:text-gray-500 sm:text-base relative' to="/show"
                onMouseEnter={() => setAccardion3(true)}
                onMouseLeave={() => setAccardion3(false)}
            >
                Show Time
                <ul  className={` sm:bg-gray-100 sm:w-56 sm:h-48 md:absolute lg:absolute xl:absolute 2xl:absolute left-0 top-16 bg-black text-gray-400 w-60 h-52 p-3 transition-opacity duration-1000 ${
                    accardion3 ? 'md:opacity-100 lg:opacity-100 xl:opacity-100 2xl:opacity-100' : 'md:opacity-0 lg:opacity-0 xl:opacity-0 2xl:opacity-0 sm:hidden'
                }`}>
                     <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Daily Showtime Layout List</li>
                    <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Daily Showtime Ajax</li>
                    <li className='sm:p-2 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:text-start lg:text-base lg:mb-2 lg:pb-3 lg:hover:text-orange-500 xl:text-start xl:text-base xl:mb-2 xl:pb-3 xl:hover:text-orange-500 2xl:text-start 2xl:text-base 2xl:mb-2 2xl:pb-3 2xl:hover:text-orange-500'>Weekly Showtime Ajax</li>
                    <li className='sm:p-2 md:border-b-8 md:border-b-orange-500 md:text-start md:text-base md:mb-2 md:pb-3 md:hover:text-orange-500 lg:border-b-8 lg:border-b-orange-500 lg:text-start lg:text-base lg:mb-4 lg:pb-3 lg:hover:text-orange-500 xl:border-b-orange-500 xl:text-start xl:text-base xl:mb-4 xl:pb-3 xl:border-b-8 xl:hover:text-orange-500 2xl:border-b-orange-500 2xl:text-start 2xl:text-base 2xl:mb-4 2xl:pb-3 2xl:border-b-8 2xl:hover:text-orange-500'>Weekly Showtime Table</li>
                </ul>
         
                <button onClick={()=>{setAccardion3(!accardion3)}} className={` sm:absolute sm:top-4 sm:right-3 sm:text-gray-500 md:hidden lg:hidden xl:hidden 2xl:hidden ${accardion3 ? 'rotate-180 sm:duration-300 sm:ease' : ''}`}><FaChevronDown/></button>  
            </Link>
            <Link className='pl-10 sm:p-3 sm:border-b-2 sm:border-solid sm:border-gray-300 font-medium sm:text-gray-500 sm:text-base' to="/rated">Top Rated</Link>
        </div>
    <button className='text-2xl sm:block md:hidden lg:hidden xl:hidden 2xl:hidden' onClick={()=>{setOpen(!open)}}><GiHamburgerMenu /></button>
    </div>
        
    </>
  )
}

export default Navbar
// absolute invisible opacity-0 z-50 top-16 left-0 m-5 w-40 p-24 group-hover:block
// md:invisible lg:invisible xl:invisible 2xl:invisible