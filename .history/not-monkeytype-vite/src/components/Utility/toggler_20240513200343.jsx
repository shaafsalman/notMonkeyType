import React from 'react';

const ToggleComponent = ({ selectedValue, onToggleChange }) => {
  return (
    <div className="relative w-full mt-4 flex items-center justify-between bg-transparent">
      <div className="flex flex-col w-full">
        <div className={`flex justify-center items-center cursor-pointer ${selectedValue === 'beginner' ? 'bg-indigo-800' : 'bg-transparent'} rounded-md`} onClick={() => onToggleChange('beginner')}>
          <button className="px-4 py-2 text-md font-medium text-white">
            Beginner
          </button>
        </div>
        <div className={`flex justify-center items-center cursor-pointer ${selectedValue === 'intermediate' ? 'bg-indigo-800' : 'bg-transparent'} rounded-md mt-2`} onClick={() => onToggleChange('intermediate')}>
          <button className="px-4 py-2 text-md font-medium text-white">
            Intermediate
          </button>
        </div>
        <div className={`flex justify-center items-center cursor-pointer ${selectedValue === 'expert' ? 'bg-indigo-800' : 'bg-transparent'} rounded-md mt-2`} onClick={() => onToggleChange('expert')}>
          <button className="px-4 py-2 text-md font-medium text-white">
            Expert
          </button>
        </div>
      </div>
      <span className={`${selectedValue === 'beginner' ? 'left-1/6' : selectedValue === 'intermediate' ? 'left-1/2' : 'left-5/6'} text-white bg-indigo-800 px-4 py-2 text-xl flex items-center justify-center rounded transition-all duration-300 ease-linear`}>
        {selectedValue === 'beginner' ? 'Beginner' : selectedValue === 'intermediate' ? 'Intermediate' : 'Expert'}
      </span>
    </div>
  );
}

export default ToggleComponent;
