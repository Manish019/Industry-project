import React from 'react'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import { ToastContainer} from 'react-toastify';
import Footer from './Components/Footer';
// import Lottie from 'lottie-react';
// import house from './house.json'
// import house from './assets/house.json'; 
const App = () => {
  return (
    <div className='w-full overflow-hidden relative'>
    {/* <div className='fixed inset-0 -z-10'>
      <Lottie 
        animationData={house} 
        loop={true}
        style={{ width: '100%', height: '100%', opacity: 0.5 }}
      />
    </div> */}

      <Navbar />
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;