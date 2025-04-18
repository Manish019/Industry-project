import React from 'react'
//import {assets} from '../assets/assets';
import Lottie from 'lottie-react';
// import house from './house.json'
import house from '../assets/house.json'; 
import { motion } from "motion/react";



const About = () => {
  return (
    <div className='container flex flex-col justify-center items-center mx-auto
    p-14 md:px-20 lg:px-32' id='about'> 
    {/* <Lottie animationData={house} loop={true} /> */}
        <motion.h2 
       initial={{ opacity: 0, y: -100 }}
       whileInView={{opacity: 1, y:0 }}
       transition={{ duration:1.5}}
        className='text-2xl sm:text-4xl font-bold mb-2 text-[#cf0909]'>About <span className='underline underline-offset-4 text-black decoration-1 under font-light'>Our Brand</span>
        </motion.h2>
        <motion.p
         initial={{ opacity: 0, y: 0 }}
         whileInView={{opacity: 1, y:3 }}
         transition={{ duration:1.5, delay: 0.2}}
        className='text-[rgb(15_20_92)] max-w-80 text-center mb-8
         '>Passionate About Properties, Dedicated to Your Vision

</motion.p>

<motion.div 
initial={{ opacity: 0, x: 100 }}
whileInView={{opacity: 1, x:0 }}
transition={{ duration:1.3}}
viewport={{ once: false }}

className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    {/* <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-lg'/> */}
    <Lottie className='w-full sm:w-1/2 max-w-lg opacity-100'
        animationData={house} 
        loop={true}
        // style={{ width: '100%', height: '100%', opacity: 1 }}
      />
    <div className='flex flex-col items-center md:items-start mt-20 text-black'>

<div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
     <div className='animate-in animate-fade-down animate-once animate-ease-in duration-300'>
        <p className='text-4xl font-medium text-gray-800'>10+</p>
        <p>Years of Excellence</p>
        </div>
        <div>
        <p className='text-4xl font-medium text-gray-800'>12+</p>
        <p>Projects Completed</p>
        </div>
        <div>
        <p className='text-4xl font-medium text-gray-800'>20+</p>
      
        <p>Mn. Sq. Ft. Delivered</p>
        </div>
        <div>
        <p className='text-4xl font-medium text-gray-800'>25+</p>
        <p>Ongoing Projects</p>
     </div>
</div>
<div className='my-10'>
{/* <p className='my-10 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p> */}
<a href="#read" className='border-1 border-white px-6 py-3 bg-[rgb(15_15_15)] text-white rounded-full hover:bg-[brown] hover:text-[white]'>Learn more</a>
</div>
    </div>
</motion.div>


    </div>
  );
};

export default About;