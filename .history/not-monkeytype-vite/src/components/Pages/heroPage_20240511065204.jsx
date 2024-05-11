import React from 'react'
import Hero_front from '../Spline/hero';
import Footer from '../Page-Parts/Footer';

function HeroPage() {
  return (
    <div>
        <div className="nav flex justify-center">
            

        <div class="fixed flex justify-center rounded-lg  top-0 z-10 w-2/4 h-13 mt-60  bg-transparent backdrop-filter    text-white p-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
    <Link to="/Home/gamemenu" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaGamepad className="inline-block mr-1" />
            Game Menu
          </Link>
          <Link to="/Home/Leaderboards" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <FaTrophy className="inline-block mr-1" />
            Leaderboard
          </Link>
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
