import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
   display:flex;
   margin-top: 10vh;
   margin-left:60%;
   width: 30%;
   height: 70vh;
   z-index :10;
   border-radius: 20%;
   
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
