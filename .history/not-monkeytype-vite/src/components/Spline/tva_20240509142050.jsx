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
      margin-left: 70%;       
      width:30%;
      height:100vh;
   
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

const lefter = styled.div`
//    display:flex;
//    margin-top: 10vh;
//    margin-left:60%;
//    width: 30%;
//    height: 70vh;
   
      border: 10px solid orange;
      border-radius: 25px;
     
             
      background-color: red;
      height:60vh;
   
`;



const TVA = () => {
    return (
        <Absolute>
             
             <lefter>
             <div className="max-w-lg-20 rounded-lg overflow-hidden shadow-lg bg-transparent backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-opacity-20 transition duration-500 transform hover:scale-105">
            <div className="lg:px- lg:py-20 px-6 py-12">
              <div className="font-bold text-4xl text-white mb-2">MultiPlayer</div>
              <p className="text-white text-xl">:Join Room</p>
              <p className="text-white text-xl">:Create Room</p>
                   
            </div>
            <div className="px-6 py-6 flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:py-0">
          
            </div>
          </div>
              </lefter>
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
