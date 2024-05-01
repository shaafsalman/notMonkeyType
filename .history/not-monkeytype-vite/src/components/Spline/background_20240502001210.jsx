import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
//    display: flex;
//    margin-left: 40vh;
//    margin-top:30vh;
//    width: 850px;
//    min-height: 490px;
   
`;



const Background = () => {
    return (
        <Wrapper>
            <Spline
                // scene="https://prod.spline.design/6yKkmgUQPq6fj9p2/scene.splinecode"
                  scene ="https://prod.spline.design/INfQaPZh4ZLcGaO3/scene.splinecode"
            />
        </Wrapper>
    );
};

export default Background;
