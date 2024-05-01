import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   display: absolute;
   top:100;
   width: 2000px;
   height: 100%;
   min-height: 720px;
`;



const Keyboard = () => {
    return (
        <Wrapper>
            <Spline
                className='spline' 
                // scene="https://prod.spline.design/kPm-3HGpLuz3B6kw/scene.splinecode"
                // scene="https://prod.spline.design/LDtGZDtvGmPhkhOr/scene.splinecode"
                scene="https://prod.spline.design/liWla8d1tIE6Sg15/scene.splinecode"
            />
        </Wrapper>
    );
};

export default Keyboard;
