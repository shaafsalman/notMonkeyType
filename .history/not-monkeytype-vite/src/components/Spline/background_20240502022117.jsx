import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
`;

const Background = ({ isDarkMode }) => {
  const sceneUrl = isDarkMode
    ? "https://prod.spline.design/DoKI4QlUg-OWEklY/scene.splinecode" // Dark mode scene URL
    : "https://prod.spline.design/DoTBdvAUV6DRYatg/scene.splinecode"; // Bright mode scene URL

  return (
    <Wrapper>
      <Spline scene={sceneUrl} />
    </Wrapper>
  );
};

export default Background;
