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
        {/* Settings page */}
         
      </div>
    </div>
  </div>
  );
};

export default Settings;
