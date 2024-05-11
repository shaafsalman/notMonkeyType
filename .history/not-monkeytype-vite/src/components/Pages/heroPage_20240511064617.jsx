import React from 'react'
import Hero_front from '../Spline/hero';
import Footer from '../Page-Parts/Footer';

function HeroPage() {
  return (
    <div>
        <div className="nav flex justify-center">
            

        <div class="fixed top-0 z-10 w-2/4  bg-gray-800 text-white p-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md mr-4">Login</button>
      <button class="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md">Register</button>
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
