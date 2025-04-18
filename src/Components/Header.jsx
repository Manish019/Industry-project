import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react"
import {assets} from '../assets/assets'
//import Navbar from './Navbar';




const Header = () => {
  return (
    <div className='min-h-screen mb-0 bg-cover bg-center relative
    flex items-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.house_banner})`}}
    id='Header' >
      <div className='absolute inset-0 bg-black/50'>  {/* This adds the transparent overlay */}
      
     
{/* navbar here */}
{/* <Navbar /> */}
{/* End Navbar */}
{/* banner text section created */}

<div className='container text-center mx-auto py-4 px-6 
md:py-32 md:px-20 text-white' id='home'>
    <motion.h1 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{opacity: 1, y:0 }}
    transition={{ duration:1.3}}
    className='text-6xl sm:text-2xl md:text-[70px] md:leading-[70px] 
    inline-block max-w-3xl pt-20'>Explore homes that fit your dreams</motion.h1>

    <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    
    className='space-x-6 mt-16'>
        <a href="#about" className=" border-1 border-white px-6 py-3 bg-[rgb(17_90_124)] rounded-full hover:bg-[brown] hover:text-[white]">
            Learn More <IoIosArrowRoundForward className='inline-block text-[25px]' />
            </a>

            <a href="#contact" className="border-1 border-white px-6 py-3 bg-[rgb(17_90_124)] rounded-full hover:bg-[brown] hover:text-[white]">
            Contact Us <IoIosArrowRoundForward  className='inline-block text-[25px]'/>
            </a>
    </motion.div>
    {/* <svg class="size-6 animate-bounce ..."> </svg> */}
</div>
</div>
</div>

  )
}

export default Header;