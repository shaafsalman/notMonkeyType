import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1; /* Ensure the background stays behind other content */
`;

const Background = () => {
    return (
        <Wrapper>
            <Spline
                scene="https://prod.spline.design/INfQaPZh4ZLcGaO3/scene.splinecode"
            />
        </Wrapper>
    );
};

export default Background;
