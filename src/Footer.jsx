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

function Footer() {
  return (
    <>
    <div className='bg-center bg-no-repeat bg-cover object-cover w-full sm:w-full sm:bg-center sm:bg-no-repeat sm:bg-cover sm:object-cover md:bg-center md:bg-no-repeat md:bg-cover md:object-cover md:w-full' style={{backgroundImage:`url(${backImage})`}}>
        <div className='flex flex-row justify-around items-center w-4/5 sm:w-full sm:flex sm:flex-col sm:justify-start sm:items-center md:w-full md:flex md:flex-col md:justify-start md:items-center'>
            <div className='w-1/4 mt-20 sm:w-full sm:mt-16 md:w-full md:mt-16'>
                <div className='w-24 sm:w-24 md:w-24'>
                    <img className=' w-28 sm:w-28 md:w-28' src={movieLogo} alt="" />
                </div>
                <div className='w-72 sm:w-full md:w-full'>
                    <p className='text-gray-400 font-medium text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
            <div className='w-1/4 sm:w-full md:w-full'>
                <h1 className='font-extrabold text-gray-400 text-2xl'>Customer Services</h1>
                <ul className='text-gray-400'>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>Comming Soon</li>
                    <li className='p-2'>Top Rated</li>
                </ul>
            </div>
            <div className='w-1/4 mt-20 sm:w-full sm:mt-16 md:w-full md:mt-16'>
            <h1 className='font-extrabold text-gray-400 text-2xl'>Customer Services</h1>
            <div className='w-full h-40 flex justify-center items-center border-b-2 border-b-gray-400 sm:w-full sm:h-48 sm:flex sm:justify-start sm:border-b-2 sm:border-b-gray-400 md:w-full md:h-48 md:flex md:justify-start md:border-b-2 md:border-b-gray-400'>
                <div className='w-2/5 mr-3 sm:w-2/4 sm:mr-3 md:w-2/4 md:mr-3'>
                <img src={audince} alt="" />
                </div>
                <div className='w-1/2 text-gray-400 sm:w-1/2 md:w-1/2 sm:text-gray-400 md:text-gray-400 '>
                <h6 className='font-bold text-xs'>SIX BOOK-TO-FILM ADAPTATIONS TO GET EXCITED ABOUT THIS AUTUMN</h6>
                <p><i>April 28, 2022 / 0 Comments</i></p>
                </div>
            </div>
            <div className='w-full h-40 flex justify-center items-center mb-8 border-b-2 border-b-gray-400 sm:w-full sm:h-48 sm:flex sm:justify-start sm:border-b-2 sm:border-b-gray-400 md:w-full md:h-48 md:flex md:justify-start md:border-b-2 md:border-b-gray-400'>
                <div className='w-2/5 mr-3 sm:w-2/4 sm:mr-3 md:w-2/4 md:mr-3'>
                <img src={audinceTwo} alt="" />
                </div>
                <div className='w-1/2 text-gray-400 sm:w-1/2 md:w-1/2 sm:text-gray-400 md:text-gray-400'>
                    <h4 className='font-bold text-xs'>THE BEATLES: EIGHT DAYS A WEEK – THE TOURING</h4>
                    <p><i>April 28, 2022 / 0 Comments</i></p>
                </div>
            
            </div>

            </div>
            <div className='w-1/4 flex justify-center items-center flex-col mb-36 sm:w-full sm:justify-start sm:flex sm:flex-col sm:items-center sm:mb-40 md:mb-40 md:w-full md:flex md:flex-col md:justify-center md:items-center'>
                <h1 className='font-extrabold text-gray-400 text-2xl'>Contact Us</h1>
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
    {/* <div className=' w-full h-28 bg-black flex justify-around items-center sm:w-full md:w-full sm:h-32 md:h-32 sm:flex md:flex sm:flex-col md:flex-col sm:justify-start md:justify-start sm:items-center md:items-center'>
    <div className='text-gray-400 sm:w-full sm:text-gray-400 md:w-full md:text-gray-400'>
        <h5>©copyright 2016 Movie</h5>
    </div>
    <div className='text-gray-400 text-2xl sm:w-full md:w-full'>
        <ul className='flex sm:flex md:flex'>
            <li className='mr-4'><CiFacebook /></li>
            <li className='mr-4'><FaTwitterSquare /></li>
            <li className='mr-4'><FaWhatsapp/></li>
        </ul>
    

    
    
    </div>
    </div> */}
    
    </>
  )
}

export default Footer