import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   position: absolute;
   width: 30%;
   min-height: 100vh;
   z-index :10;
   
`;



const TVA = () => {
    return (
        <Wrapper>
            <Spline
                className='spline' 
                scene="https://prod.spline.design/wbGSEgtIeXYtBDkR/scene.splinecode"
            />
        </Wrapper>
    );
};

export default TVA;
