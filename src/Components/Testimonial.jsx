import React from 'react'
import { assets, testimonialsData } from '../assets/assets';

const Testimonial = () => {
  return (
    
    <div className='container mx-auto w-full overflow-hidden
    p-14 md:px-20 lg:px-32' id='testimonial'> 
        <h2 className='text-center text-2xl sm:text-4xl font-bold mb-2 text-[#cf0909]'>Customer   <span className='underline underline-offset-4 text-black decoration-1 under font-light'>Testimonials</span>
        </h2>
        <p className='text-[rgb(15_20_92)] max-w-80 text-center mx-auto mb-8'>Real Stories from Those Who Found Home with Us
</p>

{/* testimonial */}
<div class="flex flex-wrap justify-center gap-8">
        {/* {Testimonial data} */}
        {testimonialsData.map((testimonial, index) => (
            <div key={index} className='flex-shrink-0 w-full md:w-[48%] lg:w-[30%] 
             border shadow-lg rounded px-8 py-12 text-center'>
 <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
 <h2>{testimonial.name}</h2>
 <p>{testimonial.title}</p>

<div>
    {Array.from({ length: testimonial.rating }, (items, index) => (

<img key={index} src={assets.star_icon} alt="star" className='w-5 h-5 inline-block' />
    ))}
</div>
<p>{testimonial.text}</p>
            </div>
        ))}
       
</div>
</div>
  );
};

export default Testimonial;