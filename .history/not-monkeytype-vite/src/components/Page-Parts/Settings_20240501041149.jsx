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
    <div className="max-w-screen-xl rounded-lg ml-20 my-20 mr-20 overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="px-6 py-4">
      <div className="pt-4">
                  <div className="font-bold text-4xl mb-2 px-">Game Settings</div>
                </div>
                <hr className="mt-4 mb-8" />
                {/* Difficulty */}
                <div className="py-2 text-xl font-semibold">Difficulty</div>
                <div>
                  <select
                    className="border border-gray-300 bg-white py-2 px-4 rounded-md"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <hr className="mt-4 mb-8" />
                {/* Time Limit */}
                <div className="py-2 text-xl font-semibold">Time Limit (seconds)</div>
                <input
                  type="number"
                  className="border border-gray-300 bg-white py-2 px-4 rounded-md"
                  value={timeLimit}
                  onChange={handleTimeLimitChange}
                />
                <hr className="mt-4 mb-8" />
                {/* Word Count */}
                <div className="py-2 text-xl font-semibold">Word Count</div>
                <input
                  type="number"
                  className="border border-gray-300 bg-white py-2 px-4 rounded-md"
                  value={wordCount}
                  onChange={handleWordCountChange}
                />
                <hr className="mt-4 mb-8" />
                {/* Sound On/Off */}
                <div className="py-2 text-xl font-semibold">Sound</div>
                <div>
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
                <hr className="mt-4 mb-8" />
                {/* Save Button */}
                <button
                  className="rounded-lg bg-indigo-900 px-4 py-2 text-white"
                  onClick={saveSettings}
                >
                  Save Settings
                </button>
              </div>
         
      </div>
    </div>
  </div>
  );
};

export default Settings;
