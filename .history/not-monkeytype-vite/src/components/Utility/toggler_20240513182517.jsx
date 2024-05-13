import React from 'react';

const ToggleComponent = ({ selectedValue, onToggleChange }) => {
  return (
    <div className="relative w-full mt-4 rounded-md border h-10 p-1 bg-gray-200">
      <div className="flex w-full">
        <div className={`w-1/3 flex justify-center items-center text-gray-400 cursor-pointer ${selectedValue === 'beginner' ? 'bg-indigo-300' : ''}`} onClick={() => onToggleChange('beginner')}>
          <button>Beginner</button>
        </div>
        <div className={`w-1/3 flex justify-center items-center text-gray-400 cursor-pointer ${selectedValue === 'intermediate' ? 'bg-indigo-300' : ''}`} onClick={() => onToggleChange('intermediate')}>
          <button>Intermediate</button>
        </div>
        <div className={`w-1/3 flex justify-center items-center text-gray-400 cursor-pointer ${selectedValue === 'expert' ? 'bg-indigo-300' : ''}`} onClick={() => onToggleChange('expert')}>
          <button>Expert</button>
        </div>
      </div>
      <span className={`${selectedValue === 'beginner' ? 'left-1/3' : selectedValue === 'intermediate' ? 'left-1/2' : 'left-2/3'} -ml-1 text-gray-800 bg-white shadow text-sm flex items-center justify-center w-1/3 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute`}>
        {selectedValue === 'beginner' ? 'Beginner Selected' : selectedValue === 'intermediate' ? 'Intermediate Selected' : 'Expert Selected'}
      </span>
    </div>
  );
}

export default ToggleComponent;
