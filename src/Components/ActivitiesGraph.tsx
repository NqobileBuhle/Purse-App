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
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
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
      <div style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '15px' }}>
      <h3 style={{ color: '#fff', textAlign: 'center' }}>Activities</h3>
      <Line data={lineChartData} options={options}/>
    </div>
  
        
    ) 
    
};

export default ActivitiesGraph