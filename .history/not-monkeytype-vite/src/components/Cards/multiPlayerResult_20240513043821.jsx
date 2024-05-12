import React from 'react';

function Results({ scores }) {
    // Check if scores array is empty
    if (scores.length === 0) {
        return <div>No results to display</div>;
    }

    // Calculate final scores for each player
    const calculatedScores = scores.map(score => ({
        ...score,
        finalScore: score.wpm * (score.accuracy / 100)
    }));

    // Find the winner based on the highest final score
    const winner = calculatedScores.reduce((acc, curr) => (acc.finalScore > curr.finalScore ? acc : curr), calculatedScores[0]);

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-start z-50">
            <div className="max-w-screen-lg mx-4 mt-8 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 transition duration-500 transform hover:scale-105">
                <div className="p-6 sm:p-8 lg:p-10">
                    <div className="text-white text-2xl sm:text-3xl font-bold mb-4">Results</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {calculatedScores.map((score, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold">Player {index + 1} {score.id === winner.id ? "(Winner)" : ""}</h3>
                                <p className="text-lg">Email: {score.email}</p>
                                <p className="text-lg">WPM: {score.wpm.toFixed(2)}</p>
                                <p className="text-lg">Accuracy: {score.accuracy.toFixed(2)}%</p>
                                <p className="text-lg">Score: {score.finalScore.toFixed(2)}</p>
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
