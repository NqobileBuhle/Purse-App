import React from 'react';

function Activity() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-4">Activity</h3>
            <div className="h-24 bg-gray-700 rounded-lg flex items-end justify-around">
                {/* Simulated activity bars */}
                <div className="bg-purple-500 h-12 w-4 rounded"></div>
                <div className="bg-purple-500 h-16 w-4 rounded"></div>
                <div className="bg-purple-500 h-8 w-4 rounded"></div>
                <div className="bg-purple-500 h-20 w-4 rounded"></div>
            </div>
        </div>
    );
}

export default Activity;
