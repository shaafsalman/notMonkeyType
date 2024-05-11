import React from 'react'
import Hero_front from '../Spline/hero';
import Footer from '../Page-Parts/Footer';
import { Link, useLocation } from 'react-router-dom';

function HeroPage() {
  return (
    <div>
        <div className="nav flex justify-center">
            

        <div class="fixed flex justify-center rounded-lg  top-0 z-10 w-2/4 h-13 mt-60  bg-transparent backdrop-filter    text-white p-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
    
    </div>
  </div>
  </div>

        </div>
   

        <Hero_front/>
         <Footer/>
    </div>
  )
}

export default HeroPage
