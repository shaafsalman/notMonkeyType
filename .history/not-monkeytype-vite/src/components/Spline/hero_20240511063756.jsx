import React, { Component } from 'react'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
    z-index: 10; 
   
`;

function Hero_front() {
    return (
        <div>
        <Wrapper>
            <Spline                

                scene="https://prod.spline.design/ANqPw7FAWFeUJ8Rq/scene.splinecode"

            />        
         </Wrapper>
      </div>
    )
  }
  
  export default Hero_front
  
