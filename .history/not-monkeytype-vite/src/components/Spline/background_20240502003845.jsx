import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   display: flex;
   justify-content: center; /* Center the Spline scene horizontally */
   align-items: center; /* Center the Spline scene vertically */
   width: 100vw; /* Take up full width of the viewport */
   height: 100vh; /* Take up full height of the viewport */
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
