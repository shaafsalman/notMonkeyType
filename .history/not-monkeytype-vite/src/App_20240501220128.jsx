import { useState } from 'react'
import './App.css'
// import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Tester from './components/Pages/tester';
import Spline from '@splinetool/react-spline';



function App() {
  return (
    <div className="App">
          {/* <Tester/>
        <Home/> */}
        
<div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
<Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/kPm-3HGpLuz3B6kw/scene.splinecode'/>
</div>
    </div>
  );
}

export default App
