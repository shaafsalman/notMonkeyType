import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`

   width: 100%;
   height: 100%;
   z-index: 50; 
   
`;

function hero_front() {
    return (
        <div>
        <Wrapper>
            <h1>hello</h1>
            <Spline scene="https://prod.spline.design/t4n-Ky31HQkhyeIh/scene.splinecode" />        
         </Wrapper>
      </div>
    )
  }
  
  export default hero_front
  
