import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   min-height: 720px;
`;



const Keyboard = () => {
    return (
        
<div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
<Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene=''/>
</div>
    );
};

export default Keyboard;
