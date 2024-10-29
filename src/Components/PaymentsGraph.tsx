import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React ,{ useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PaymentsGraph = () => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const datasetData = [65, 59, 80, 81, 56, 55, 40];

    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: datasetData,
                backgroundColor: '#f97316',
                borderColor: '#f97316',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            
        },
    };

    return (
        <div className='bg-gray-900'>
            <h2 className='text-white text-2xl text-center font-semibold'>Payments</h2>
            <Bar data={data} options={options} >Activities</Bar>;
        </div>
        
    ) 
    
};

export default PaymentsGraph