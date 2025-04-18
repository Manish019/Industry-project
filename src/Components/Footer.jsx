import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
<div className='w-full md:w-1/3 mb-8 md:mb-0'>
<img src={assets.logo_main} alt=""  className='mb-5 w-[70px] h-[50px] bg-white'/>
<p className='text-gray-400 mb-4 max-w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.

</p>
</div>
<div className='w-full md:w-1/5 mb-8 md:mb-0'>
    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
    <ul className='flex flex-col gap-2 text-gray-400'>
    <a href="#home" className="rounded-md hover:text-[red] px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
            <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-[red]">About Us</a>
            <a href="#project" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-[red]">Projects</a>
    </ul>
</div>

<div className='w-full md:w-1/3'>
    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter
    </h3>
    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.

</p>
<div>
    <form action="">
        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700
         focus:outline-none w-full md:w-auto' />
         <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscrib</button>
    </form>
</div>
</div>

        </div>
        <div className='border-t border-gray-700 py-4 mt-10'>
            <p className='text-center text-gray-500'>Copyright 2025 © Manish Web. All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;