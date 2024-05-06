import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   position: absolute;
   margin-left: 20vh;
   margin-top:35vh;
   width: 850px;
   min-height: 200px;
   z-index :10;
   
`;



const Keyboard = () => {
    return (
        <Wrapper>
            <Spline
                className='spline' 
                scene="https://prod.spline.design/liWla8d1tIE6Sg15/scene.splinecode"
            />
        </Wrapper>
    );
};

export default Keyboard;
