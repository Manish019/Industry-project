import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { GoArrowUpRight } from "react-icons/go";


const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if(showMobileMenu){
    document.body.style.overflow = 'hidden'; 
    }else{
      document.body.style.overflow = 'auto';
    };

    return () => {
      document.body.style.overflow = 'auto';
    };
   
  }, [showMobileMenu])
  return (
    <>
  <nav className="bg-black-800 ">
    <div className="fixed w-full bg-[#1417287d] top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex shrink-0 items-center">
          <img  className="h-8 w-auto" src={assets.logo} alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 md:block">
          <div className="flex space-x-4">
            <a href="#home" className="rounded-md hover:text-[red] px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
            <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-[red]">About Us</a>
            <a href="#project" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-[red]">Projects</a>
            <a href="#gallery" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-[red]">Gallery</a>
          <a href="#testimonial" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-[red]">Testimonial</a>
          </div>
        </div>
 
<a href="#contact" className='hidden md:block bg-white px-8 py-2 rounded-full
 hover:bg-[brown] hover:text-[white]'>Contact Us <GoArrowUpRight className='inline-block text-[20px]' />
 </a>

<img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="open menu" className='md:hidden w-7' />
    </div>
    {/*------------ Mobile menu icons--------------- */}

    <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0' }  right-0 top-0 bottom-0 
    overflow-hidden bg-[rgb(9_11_13_/_97%)] transition-all`}>
      <div className='flex justify-end p-6 cursor-pointer'>
        <img onClick={() => setShowMobileMenu(false)} src={assets.close_icon} className='w-10 ' alt="cross" />
      </div>
      <ul className='flex flex-col items-center gap-2 mt-3 px-5 text-lg font-medium'>
      <a href="#home" onClick={() => setShowMobileMenu(false)} className="rounded-md hover:text-[red] px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[red]">About Us</a>
            <a onClick={() => setShowMobileMenu(false)} href="#project" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[red]">Projects</a>
            <a onClick={() => setShowMobileMenu(false)} href="#gallery" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[red]">Gallery</a>
            <a  onClick={() => setShowMobileMenu(false)} href="#testimonil" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[red]">Testimonial</a>

      </ul>
    </div>

  </div>
</nav>
    </>
);
};

export default Navbar;