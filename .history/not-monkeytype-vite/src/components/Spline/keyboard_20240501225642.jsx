import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   display: flex ;
   top:100;
   margin-left:1200px
   margin-top:1200px;
   width: 2000px;
   height: 200px;
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
