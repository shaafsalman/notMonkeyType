import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   display: flex;
   margin-left: 40vh;
   margin-top:30vh;
   width: 850px;
   min-height: 490px;
   
`;



const background = () => {
    return (
        <Wrapper>
            <Spline
                className='spline' 
                scene=""
            />
        </Wrapper>
    );
};

export default background;
