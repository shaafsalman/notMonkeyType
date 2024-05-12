import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function Results({ scores }) {
    // Calculate combined score for each player
    const combinedScores = scores.map(score => ({
        ...score,
        combinedScore: score.accuracy + score.wpm
    }));

    // Sort players by combined score in descending order
    combinedScores.sort((a, b) => b.combinedScore - a.combinedScore);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="max-w-screen-lg mx-4 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
                <div className="p-6 sm:p-8 lg:p-10">
                    <div className="text-white text-4xl font-bold mb-8">Results</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {combinedScores.map((score, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105">
                                <div>
                                    <h3 className="text-xl font-bold flex items-center mb-4 transition duration-300 ease-in-out transform hover:text-yellow-400">
                                        {index === 0 && <FontAwesomeIcon icon={faTrophy} className="text-yellow-400 mr-2" />}
                                        Player {index + 1} {index === 0 && <span className="text-yellow-400">(Winner)</span>}
                                    </h3>
                                    <p className="text-lg mt-2"><span className="font-semibold">Email:</span> {score.email}</p>
                                    <p className="text-lg"><span className="font-semibold">WPM:</span> {score.wpm.toFixed(2)}</p>
                                    <p className="text-lg"><span className="font-semibold">Accuracy:</span> {score.accuracy.toFixed(2)}%</p>
                                    <p className="text-lg"><span className="font-semibold">Score:</span> {score.score.toFixed(2)}%</p>

                                </div>
                                <p className="text-lg mt-6"><span className="font-semibold">Combined Score:</span> {score.combinedScore.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="absolute top-0 right-0 mr-4 mt-4 text-white font-bold text-xl outline-none focus:outline-none">×</button>
            </div>
        </div>
    );
}

export default Results;
