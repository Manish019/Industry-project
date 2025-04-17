import React from 'react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Testimonial from './Components/Testimonial';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Testimonial />
    </div>
  )
}

export default App;