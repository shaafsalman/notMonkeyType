import React from 'react';

const ToggleComponent = ({ selectedValue, onToggleChange }) => {
  return (
    <div className="relative w-full mt-4 rounded-md h-10 p-1  bg-transparent">
      <div className="flex w-full">
        <div className={`w-1/3 flex justify-center items-center cursor-pointer  ${selectedValue === 'beginner' ? 'bg-transparent' : 'bg-transparent'}`} onClick={() => onToggleChange('beginner')}>
          <button className="py-2 px-8 rounded-md text-md font-medium ">
            Beginner
          </button>
        </div>
        <div className={`w-1/3 flex justify-center items-center cursor-pointer ${selectedValue === 'intermediate' ? 'bg-transparent' : 'bg-transparent'}`} onClick={() => onToggleChange('intermediate')}>
          <button className="py-2 px-4 rounded-md text-md font-medium">
            Intermediate
          </button>
        </div>
        <div className={`w-1/3 flex justify-center items-center cursor-pointer ${selectedValue === 'expert' ? 'bg-transparent' : 'bg-transparent'}`} onClick={() => onToggleChange('expert')}>
          <button className="py-2 px-4 rounded-md text-md font-medium">
            Expert
          </button>
        </div>
      </div>
      <span className={`${selectedValue === 'beginner' ? 'left-1' : selectedValue === 'intermediate' ? 'left-1/3' : 'left-2/3'} text-white bg-indigo-800  px-4 py-4 text-xl flex items-center justify-center w-1/3 rounded h-[1.88rem] transition-all duration-300 ease-linear top-[4px] absolute`}>
        {selectedValue === 'beginner' ? 'Beginner' : selectedValue === 'intermediate' ? 'Intermediate' : 'Expert'}
      </span>
    </div>
  );
}

export default ToggleComponent;