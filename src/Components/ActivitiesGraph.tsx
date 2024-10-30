<<<<<<< HEAD
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Transaction {
    transactionId: string;
    date: string;
    Expense: string;
    description: string;
    Category: string;
    amount: number;
}
const ActivitiesGraph = () => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const [activitiesData, setAvtivitiesData] = useState<Transaction[]>([]);

    useEffect(() => {

        fetch('/../public/Report.json')
            .then(response => response.json())
            .then((data: { transactions: Transaction[] }) => {
                const activities = data.transactions.filter(transaction => transaction.Category !== "Payments");
                setAvtivitiesData(activities);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(activitiesData);

    const lineChartData = {
        labels: labels,
        datasets: [
            {
                label: 'Money spent on activities',
                data: activitiesData.map(item => item.amount),
                backgroundColor: 'rgba(128, 90, 213, 0.2)',
                borderColor: '#805AD5',
                borderWidth: 2,
                tension: 0.4, // smooth curve
                pointBackgroundColor: '#805AD5',
                pointBorderColor: '#805AD5',
                pointHoverBackgroundColor: '#805AD5',
                pointHoverBorderColor: '#805AD5',
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
        <div className='bg-slate-800 rounded-2xl'>
            <h3 className='text-white text-2xl text-center font-semibold pb-3'>Activities</h3>
            <Line data={lineChartData} options={options} className='bg-slate-800 rounded-2xl' />
        </div>


    )

};

=======
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React ,{ useEffect, useState } from 'react';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Transaction {
    transactionId: string;
    date: string;
    Expense: string;
    description: string;
    Category: string;
    amount: number;
  }
const ActivitiesGraph = () => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const [activitiesData, setAvtivitiesData] = useState<Transaction[]>([]);

    useEffect(() => {
    
        fetch('/../public/Report.json')
          .then(response => response.json())
          .then((data: { transactions: Transaction[] }) => {
            const activities = data.transactions.filter(transaction => transaction.Category !== "Payments");
            setAvtivitiesData(activities);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      
      console.log(activitiesData);

      const lineChartData = {
        labels: labels,
        datasets: [
          {
            label: 'Money spent on activities',
            data: activitiesData.map(item => item.amount),
            backgroundColor: 'rgba(128, 90, 213, 0.2)',
            borderColor: '#805AD5',
            borderWidth: 2,
            tension: 0.4, // smooth curve
            pointBackgroundColor: '#805AD5',
            pointBorderColor: '#805AD5',
            pointHoverBackgroundColor: '#805AD5',
            pointHoverBorderColor: '#805AD5',
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
      <div className='bg-slate-800 rounded-2xl'>
      <h3 className='text-white text-2xl text-center font-semibold pb-3'>Activities</h3>
      <Line data={lineChartData} options={options} className='bg-slate-800 rounded-2xl'/>
    </div>
  
        
    ) 
    
};

>>>>>>> ed1c6707ff5a242d7e75b4058d3bee7aaea1a063
export default ActivitiesGraph