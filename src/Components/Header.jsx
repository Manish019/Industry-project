import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineReadMore } from "react-icons/md";

import {assets} from '../assets/assets'
//import Navbar from './Navbar';




const Header = () => {
  return (
    <div className='min-h-screen mb-0 bg-cover bg-center 
    flex items-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.header_img})`}}
    id='Header' >
{/* navbar here */}
{/* <Navbar /> */}
{/* End Navbar */}
{/* banner text section created */}

<div className='container text-center mx-auto py-4 px-6 
md:py-32 md:px-20 text-white'>
    <h1 className='text-6xl sm:text-2xl md:text-[70px] md:leading-[70px] 
    inline-block max-w-3xl pt-20'>Explore homes that fit your dreams</h1>

    <div className='space-x-6 mt-16'>
        <a href="#about" className=" border-1 border-white px-6 py-3 bg-[rgb(17_90_124)] rounded-full hover:bg-[brown] hover:text-[white]">
            Learn More <IoIosArrowRoundForward className='inline-block text-[25px]' />
            </a>

            <a href="#contact" className="border-1 border-white px-6 py-3 bg-[rgb(17_90_124)] rounded-full hover:bg-[brown] hover:text-[white]">
            Contact Us <IoIosArrowRoundForward  className='inline-block text-[25px]'/>
            </a>
    </div>
</div>

    </div>
  )
}

export default Header;