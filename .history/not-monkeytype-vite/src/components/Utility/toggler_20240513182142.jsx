import React from 'react';

const ToggleComponent = () => {
  return (
    <div className="w-full max-w-sm flex flex-col mx-auto text-center">
      <div x-data="{ selected: 'beginner' }" className="w-full rounded bg-white h-auto m-auto shadow flex flex-col p-8 pt-6 rounded-xl">
        <h1 className="text-indigo-600 font-bold">Difficulty Level</h1>
        <div className="relative w-full mt-4 rounded-md border h-10 p-1 bg-gray-200">
          <div className="relative w-full h-full flex items-center">
            <div onClick="selected='beginner'" className="w-full flex justify-center text-gray-400 cursor-pointer">
              <button>Beginner</button>
            </div>
            <div onClick="selected='intermediate'" className="w-full flex justify-center text-gray-400 cursor-pointer">
              <button>Intermediate</button>
            </div>
            <div onClick="selected='expert'" className="w-full flex justify-center text-gray-400 cursor-pointer">
              <button>Expert</button>
            </div>
          </div>
          <span x-text="selected" className="bg-white shadow text-sm flex items-center justify-center w-1/3 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute"></span>
        </div>
      </div>
    </div>
  );
}

export default ToggleComponent;
