import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   min-height: 720px;
`;



const Keyboard = () => {
    return (
        <Wrapper>
            <Spline
                className='spline' 
                // scene="https://prod.spline.design/kPm-3HGpLuz3B6kw/scene.splinecode"
                scene="https://prod.spline.design/LDtGZDtvGmPhkhOr/scene.splinecode"
            />
        </Wrapper>
    );
};

export default Keyboard;
