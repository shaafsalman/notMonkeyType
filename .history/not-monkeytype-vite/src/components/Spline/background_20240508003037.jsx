import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1; 
   
`;



const Background = () => {
    return (
        <Wrapper>
            <Spline
                 //darkmode
                // scene= "https://prod.spline.design/DoKI4QlUg-OWEklY/scene.splinecode"
                https://prod.spline.design/S8-Yiufm9HWCPpmE/scene.splinecode
                
                 //brightmode
                // scene = "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"
                //    scene= "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"
            />
        </Wrapper>
    );
};

export default Background;
