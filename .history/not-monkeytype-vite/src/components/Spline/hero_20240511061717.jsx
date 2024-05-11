import React, { Component } from 'react'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`

   width: 100%;
   height: 100%;
    z-index: 20; 
   
`;

function Hero_front() {
    return (
        <div>
        <Wrapper>
            <Spline                
                // scene="https://prod.spline.design/t4n-Ky31HQkhyeIh/scene.splinecode"
                                   scene= "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"

            />        
         </Wrapper>
      </div>
    )
  }
  
  export default Hero_front
  
