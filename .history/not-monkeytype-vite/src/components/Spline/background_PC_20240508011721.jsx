import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const WrapperPC = styled.div`
position: fixed;
    display:flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; 
   cursor: pointer;
   
   `;



const BackgroundPC = () => {
    return (
        <WrapperPC>
            <Spline
  
                   scene= "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"



            />
        </WrapperPC>
    );
};

export default BackgroundPC;
