import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


function Balance() {
    // Circular progress chart data
    const data = {
        datasets: [
            {
                data: [3, 0], // 68% spent, 32% remaining
                backgroundColor: ['#8b5cf6', '#333'],
                borderWidth: 0,
            },
        ],
    };

    // Circular chart options
    const options = {
        cutout: '80%', // Inner radius for the donut effect
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
        },
    };
    return (
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white flex h-100 flex-col items-center">
            <div className="flex justify-center items-center mb-6">
                <div className="relative">
                    <Doughnut data={data} options={options} width={100} height={100} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-xl font-semibold">68%</p>
                        <p className="text-xs text-gray-400">865/1284</p>
                        <p className="text-xs text-gray-500">Spent balance</p>
                    </div>
                </div>
            </div>
            <p className="text-4xl font-semibold mb-4">$1248.40</p>
            <h6 className="text-lg  mb-2">Available Balance</h6>
          
            
            <div className="h-4 bg-gray-600 rounded-full overflow-hidden mb-4">
                <div className="h-full w-2/3 bg-purple-500"></div>
                <div className="h-full w-1/2 bg-yellow"></div>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>Grocery</span>
                    <span className="text-gray-400">324.30$</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Shopping</span>
                    <span className="text-gray-400">298.10$</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Education</span>
                    <span className="text-gray-400">118.00$</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Transport</span>
                    <span className="text-gray-400">98.00$</span>
                </div>
            </div>
        </div>
    
    );
}

export default Balance;
