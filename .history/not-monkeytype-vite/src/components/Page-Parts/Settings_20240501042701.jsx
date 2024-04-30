import React, { useState } from 'react';

const Settings = () => {
  // State variables for game settings
  const [difficulty, setDifficulty] = useState('medium');
  const [timeLimit, setTimeLimit] = useState(60);
  const [wordCount, setWordCount] = useState(100);
  const [soundOn, setSoundOn] = useState(true);

  // Function to handle difficulty change
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  // Function to handle time limit change
  const handleTimeLimitChange = (e) => {
    setTimeLimit(parseInt(e.target.value));
  };

  // Function to handle word count change
  const handleWordCountChange = (e) => {
    setWordCount(parseInt(e.target.value));
  };

  // Function to handle sound toggle
  const handleSoundToggle = () => {
    setSoundOn(!soundOn);
  };

  // Function to save settings
  const saveSettings = () => {
    // Code to save settings, e.g., send to backend or store in local storage
    console.log('Settings saved:', { difficulty, timeLimit, wordCount, soundOn });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-screen-2xl mb-96 rounded-lg ml-20 my-20 mr-20 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
        <div className="px-10 py-4">
        <div className="p-10 font-bold text-5xl text-white  mb-2">Settings</div>
          <div className="mx-2 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-1">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Difficulty */}
              <div className="p-10 my-10 overflow-hidden rounded-xl bg-gray-50 shadow">
                <div className="py-4 px-6">
                  <div className="font-semibold text-3xl  mb-2">Difficulty</div>
                  <select
                    className="border border-gray-300 bg-white py-2 px-4 rounded-md w-full"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              {/* Time Limit */}
              <div className="p-10 my-10 overflow-hidden rounded-xl bg-gray-50 shadow">
                <div className="py-4 px-6">
                  <div className="font-semibold  text-3xl mb-2">Time Limit(sec)</div>
                  <input
                    type="number"
                    className="border border-gray-300 bg-white py-2 px-4 rounded-md w-full"
                    value={timeLimit}
                    onChange={handleTimeLimitChange}
                  />
                </div>
              </div>
              {/* Word Count */}
              <div className="p-10 my-10 overflow-hidden rounded-xl bg-gray-50 shadow">
                <div className="py-4 px-6">
                  <div className="font-semibold  text-3xl mb-2">Word Count</div>
                  <input
                    type="number"
                    className="border border-gray-300 bg-white py-2 px-4 rounded-md w-full"
                    value={wordCount}
                    onChange={handleWordCountChange}
                  />
                </div>
              </div>
              {/* Sound On/Off */}
              <div className="p-10  overflow-hidden rounded-xl bg-gray-50 shadow">
                <div className="py-4 px-6">
                  <div className="font-semibold  text-3xl mb-2">Sound</div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5"
                      checked={soundOn}
                      onChange={handleSoundToggle}
                    />
                    <span className="ml-2">Sound {soundOn ? 'On' : 'Off'}</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Save Button */}
            <div className="mt-12 mx-80 p-4 ">
              <button
                className="rounded-lg bg-indigo-900  px-40 py-2 text-white"
                onClick={saveSettings}
              >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
