const ScoreCard = ({ wpm, time, accuracy, score, onClose }) => {
    return (
      <div className="absolute top-0 left-0 w-80 flex justify-center items-start z-50">
        <div className="max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 mt-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="text-white text-3xl sm:text-4xl font-bold mb-8">Result</div>
            <div className="flex flex-col gap-4">
              <div className="text-white text-lg flex items-center">
                <span className="font-bold mr-2">WPM:</span> {wpm}
              </div>
              <div className="text-white text-lg flex items-center">
                <span className="font-bold mr-2">Time:</span> {time} seconds
              </div>
              <div className="text-white text-lg flex items-center">
                <span className="font-bold mr-2">Accuracy:</span> {accuracy}%
              </div>
              <div className="text-white text-lg flex items-center">
                <span className="font-bold mr-2">Score:</span> {score}
              </div>
            </div>
          </div>
          <button className="absolute top-0 right-0 mr-4 mt-4 text-white font-bold text-xl outline-none focus:outline-none" onClick={onClose}>×</button>
        </div>
      </div>
    );
  };
  