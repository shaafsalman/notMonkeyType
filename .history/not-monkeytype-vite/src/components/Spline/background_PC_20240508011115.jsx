import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const WrapperPC = styled.div`
        position: absolute;
        top: 0;
        right: 50px;
        width: 60%;
        height: 100%;
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
        </WrapperPC>
    );
};

export default BackgroundPC;
