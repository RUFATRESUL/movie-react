import React from 'react'
import backImage from './assets/footer_bg.png'
import movieLogo from './assets/images (2).png'
import audince from './assets/european-film-challenge.jpg'
import audinceTwo from './assets/images (10).jpg'
import { CiFacebook } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BiLogoTelegram } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Moviak from './assets/img_65.png'

function Footer() {
  return (
    <>
    <div className='bg-center bg-no-repeat bg-cover object-cover w-full sm:w-full md:w-full' style={{backgroundImage:`url(${backImage})`}}>
        <div className=' sm:w-full sm:flex sm:flex-col sm:justify-start sm:items-center sm:p-3 md:w-full md:flex md:flex-col md:justify-start md:items-center md:p-6 lg:flex lg:justify-around lg:items-center lg:w-full xl:flex xl:justify-around xl:items-center xl:w-full 2xl:flex 2xl:justify-around 2xl:items-center 2xl:w-full'>
            <div className='sm:w-full sm:mt-16 sm:mb-6 md:w-full md:mt-16 lg:w-1/4 lg:ml-8 xl:w-1/4 xl:ml-8 2xl:w-1/4 2xl:ml-8'>
                <div className='sm:w-40 md:w-40 lg:w-48 xl:w-48 2xl:w-48'>
                    <img src={Moviak} alt="" />
                </div>
                <div className='sm:w-full sm:pt-3 md:w-full md:pt-3 lg:w-60 xl:w-60 2xl:w-60'>
                    <p className='text-gray-400 font-medium text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
            <div className='sm:w-full md:w-full lg:w-1/4 lg:mb-44 xl:w-1/4  2xl:w-1/4'>
                <h1 className='font-extrabold text-gray-400 text-2xl lg:mb-12 xl:mb-12 2xl:mb-12'>Customer Services</h1>
                <ul className='text-gray-400'>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>Comming Soon</li>
                    <li className='p-2'>Top Rated</li>
                </ul>
            </div>
            <div className='sm:w-full sm:mt-16 md:w-full md:mt-16 lg:w-1/4 xl:w-1/4 2xl:w-1/4 lg:mt-20 xl:mt-20 2xl:mt-20'>
            <h1 className='font-extrabold text-gray-400 text-2xl'>Customer Services</h1>
            <div className='w-full sm:w-full sm:h-48 sm:flex sm:justify-start sm:border-b-2 sm:border-b-gray-400 sm:mb-8 md:mb-8 md:w-full md:h-48 md:flex md:justify-start md:border-b-2 md:border-b-gray-400 lg:flex lg:justify-center lg:items-center lg:border-b-2 lg:border-b-gray-400 lg:h-52 xl:flex xl:justify-center xl:items-center xl:border-b-2 xl:border-b-gray-400 xl:h-52 2xl:flex 2xl:justify-center 2xl:items-center 2xl:border-b-2 2xl:border-b-gray-400 2xl:h-52'>
                <div className='w-2/5 mr-3 sm:w-3/12 sm:mr-3 md:w-1/4 md:mr-3'>
                <img src={audince} alt="" />
                </div>
                <div className='w-1/2 text-gray-400 sm:w-3/4 md:w-1/2 sm:text-gray-400 md:text-gray-400 lg:pt-11 xl:pt-11 2xl:pt-11 '>
                <h6 className='font-bold text-xs'>SIX BOOK-TO-FILM ADAPTATIONS TO GET EXCITED ABOUT THIS AUTUMN</h6>
                <p><i>April 28, 2022 / 0 Comments</i></p>
                </div>
            </div>
            <div className='w-full sm:w-full sm:h-48 sm:flex sm:justify-start sm:border-b-2 sm:border-b-gray-400 sm:mb-8 md:mb-8 md:w-full md:h-48 md:flex md:justify-start md:border-b-2 md:border-b-gray-400 lg:flex lg:justify-center lg:items-center lg:border-b-2 lg:border-b-gray-400 lg:h-52 xl:flex xl:justify-center xl:items-center xl:border-b-2 xl:border-b-gray-400 xl:h-52 2xl:flex 2xl:justify-center 2xl:items-center 2xl:border-b-2 2xl:border-b-gray-400 2xl:h-52'>
                <div className='w-2/5 mr-3 sm:w-3/12 sm:mr-3 md:w-1/4 md:mr-3'>
                <img src={audinceTwo} alt="" />
                </div>
                <div className='w-1/2 text-gray-400 sm:w-3/4 md:w-1/2 sm:text-gray-400 md:text-gray-400 lg:pt-11 xl:pt-11 2xl:pt-11'>
                    <h4 className='font-bold text-xs'>THE BEATLES: EIGHT DAYS A WEEK – THE TOURING</h4>
                    <p><i>April 28, 2022 / 0 Comments</i></p>
                </div>
            
            </div>

            </div>
            <div className='w-1/4 flex justify-center items-center flex-col mb-36 sm:w-full sm:justify-start sm:flex sm:flex-col sm:items-center sm:mb-40 md:mb-40 md:w-full md:flex md:flex-col md:justify-center md:items-center lg:w-1/4 xl:w-1/4 2xl:1/4'>
                <h1 className='font-extrabold text-gray-400 text-2xl lg:mb-12 xl:mb-12 2xl-mb-12'>Contact Us</h1>
                <div className='sm:w-full md:w-full'>
                    <ul>
                        <li className='text-gray-300 mb-4'><BiLogoTelegram /> <h6 className='text-gray-400 font-bold'>9067 Zurich, Switzerland 87</h6></li>
                        <li className='text-gray-300 mb-4'><CgMail /><h6 className='text-gray-400 font-bold'>abc@gmail.com</h6></li>
                        <li className='text-gray-300 mb-4'><FaPhoneAlt /><h6 className='text-orange-500'>01-234-5678</h6></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <div className=' w-full h-28 bg-black flex justify-around items-center sm:w-full md:w-full sm:h-32 md:h-32 sm:flex sm:pt-6 md:pt-6 md:flex sm:flex-col md:flex-col sm:justify-start md:justify-start sm:items-center md:items-center'>
    <div className='text-gray-400 sm:w-full sm:text-gray-400 sm:pb-3 md:w-full md:text-gray-400'>
        <h5>©copyright 2016 Movie</h5>
    </div>
    <div className='text-gray-400 text-2xl sm:w-full md:w-full'>
        <ul className='flex sm:flex md:flex'>
            <li className='mr-4'><CiFacebook /></li>
            <li className='mr-4'><FaTwitterSquare /></li>
            <li className='mr-4'><FaWhatsapp/></li>
        </ul>
    

    
    
    </div>
    </div>
    
    </>
  )
}

export default Footer