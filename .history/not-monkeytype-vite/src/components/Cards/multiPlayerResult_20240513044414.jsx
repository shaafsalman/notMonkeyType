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
        <div className="fixed top-0 left-0 w-full flex justify-center items-start z-50">
            <div className="max-w-screen-lg mx-4 mt-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
                <div className="p-6 sm:p-8 lg:p-10">
                    <div className="text-white text-2xl sm:text-3xl font-bold mb-4">Results</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {combinedScores.map((score, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold flex items-center">
                                        {index === 0 && <FontAwesomeIcon icon={faTrophy} className="text-yellow-400 mr-2" />}
                                        Player {index + 1} {index === 0 && "(Winner)"}
                                    </h3>
                                    <p className="text-lg mt-2">Email: {score.email}</p>
                                    <p className="text-lg">WPM: {score.wpm.toFixed(2)}</p>
                                    <p className="text-lg">Accuracy: {score.accuracy.toFixed(2)}%</p>
                                    <p className="text-lg">Combined Score: {score.combinedScore.toFixed(2)}</p>
                                </div>
                                <button className="text-sm bg-purple-600 text-white py-1 px-3 rounded-full mt-4 self-end hover:bg-purple-700">View Profile</button>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="absolute top-0 right-0 mr-4 mt-2 text-white font-bold text-xl outline-none focus:outline-none">×</button>
            </div>
        </div>
    );
}

export default Results;
