import React from 'react';

function Payments() {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-4">Payments</h3>
            <div className="h-24 bg-gray-700 rounded-lg flex items-end justify-around">
                {/* Simulated payment bars */}
                <div className="bg-orange-500 h-10 w-4 rounded"></div>
                <div className="bg-orange-500 h-20 w-4 rounded"></div>
                <div className="bg-orange-500 h-8 w-4 rounded"></div>
                <div className="bg-orange-500 h-24 w-4 rounded"></div>
            </div>
        </div>
    );
}

export default Payments;
