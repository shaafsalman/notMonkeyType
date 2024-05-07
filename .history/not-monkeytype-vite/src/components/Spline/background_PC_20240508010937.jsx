import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const WrapperPC = styled.div`
   position: fixed;
    top: 0;
     left: 30;
    z-index: 0;  
   
`;



const BackgroundPC = () => {
    return (
        <WrapperPC>
            <Spline
                 //darkmode
                // scene= "https://prod.spline.design/DoKI4QlUg-OWEklY/scene.splinecode"
                
                 //brightmode
                // scene = "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"
                   scene= "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"



            />
        </Wrapper>
    );
};

export default BackgroundPC;
