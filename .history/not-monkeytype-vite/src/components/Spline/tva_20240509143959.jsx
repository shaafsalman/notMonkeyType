import React from 'react';
import Spline from '@splinetool/react-spline';

const TVA = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-4/5 max-w-lg flex rounded-lg overflow-hidden bg-white bg-opacity-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 shadow-lg h-60vh min-h-70vh">
        
        <div className="w-80 relative">
          <Spline
            className="absolute top-0 right-0 bottom-0 left-0"
            scene="https://prod.spline.design/wbGSEgtIeXYtBDkR/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
};

export default TVA;
