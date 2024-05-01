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



const background = () => {
    return (
        <Wrapper>
            <Spline
                
                scene="https://prod.spline.design/6yKkmgUQPq6fj9p2/scene.splinecode"
            />
        </Wrapper>
    );
};

export default background;
