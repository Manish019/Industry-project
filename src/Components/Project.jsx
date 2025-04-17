import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets';

const Project = () => {
// slide button 
const [currentIndex, setCurrentIndex] = useState(0);
const [cardsToShow, setCardsToShow] = useState(1);
// Remove cardToShow state as we'll use a fixed value
const cardWidth = 100; // Width of each card in percentage


useEffect(() => {
    const updateCardsToShow = () => {
      if(window.innerWidth >= 1024){
        setCardsToShow(4); 
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);



const nextProject =() => {
    setCurrentIndex((prevIndex) => 
        prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
}

const prevProject =() => {
    setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
}

  return (
    <div className='container mx-auto w-full overflow-hidden
     md:px-20 lg:px-32' id='project'> 
        <h2 className='text-center text-2xl sm:text-4xl font-bold mb-2 text-[#cf0909]'>Projects  <span className='underline underline-offset-4 text-black decoration-1 under font-light'>Completed</span>
        </h2>
        <p className='text-[rgb(15_20_92)] max-w-80 text-center mx-auto mb-8'>Crafting Spaces, Building Legacies—Explore Our Portfolio
</p>

{/* slider button */}

<div className='flex justify-end items-center mb-8'>
    <button onClick={prevProject} className='p-3 bg-[rgb(223_223_223)] rounded mr-2' aria-label='Previos Project'>
        <img src={assets.left_arrow} alt="previous" />
    </button>
    <button onClick={nextProject} className='p-3 bg-[rgb(223_223_223)] rounded mr-2' aria-label='Next Project'>
        <img src={assets.right_arrow} alt="Next" />
    </button>
</div>
{/* project slider container */}
<div className='overflow-hidden'>
<div className='flex gap-8 transition-transform duration-500 ease-in-out'
    style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
    >
        {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 mb-10'>
                <img src={project.image} alt={project.title} className='w-full h-auto mb-14 object-cover rounded-md' />
                <div className='absolute left-0 right-0  bottom-5 flex justify-center'>
                 <div className='inline-block bg-white w-4/5 px-4 py-2 shadow-md'>
                  <h3 className='text-xl font-semibold text-gray-800'>{project.title}</h3>
                  <p className='text-gray-500 text-sm'>{project.price} <span> | </span> {project.location}</p>
                </div>
                </div>
                </div>
        ))}
    </div>
</div>

</div>
  );
};

export default Project;