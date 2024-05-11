import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
//    display:flex;
//    margin-top: 10vh;
//    margin-left:60%;
//    width: 30%;
//    height: 70vh;
   z-index :10;
   border: 10px solid orange;
   border-radius: 25px;
     
      margin-left: 70%;       
      width:30%;
      height:100vh;
      position: fixed;
      top: 40;
   
`;
const Absolute = styled.div`
//    display:flex;
//    margin-top: 10vh;
//    margin-left:60%;
//    width: 30%;
//    height: 70vh;
//    z-index :10;
//    border: 10px solid orange;
//    border-radius: 25px;
     
       
      width:100%;
      height:100vh;
      z-index:-10;
      background-color:gray;
   
`;


const TVA = () => {
    return (
        <Absolute>
        <Wrapper>
            <Spline
                className='spline' 
                scene="https://prod.spline.design/wbGSEgtIeXYtBDkR/scene.splinecode"
            />
        </Wrapper>
      </Absolute>
    );
};

export default TVA;
