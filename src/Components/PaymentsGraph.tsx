import { Bar } from 'react-chartjs-2';
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
  const getDayOfWeek = (dateString: string): string => {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getUTCDay()];
  };
const PaymentsGraph = () => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const [paymentsData, setPaymentsData] = useState<Transaction[]>([]);

    useEffect(() => {
    
        fetch('/../public/Report.json')
          .then(response => response.json())
          .then((data: { transactions: Transaction[] }) => {
            const payments = data.transactions.filter(transaction => transaction.Category === "Payments");
            setPaymentsData(payments);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      console.log(paymentsData);

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Money recieved',
            data: paymentsData.map(item => item.amount),
            backgroundColor: '#f97316',
            borderColor: '#f97316',
            borderWidth: 1,
          },
        ],
      };

      const barChartOptions = {
        plugins: {
          tooltip: {
            callbacks: {
              // Customizing tooltip to show Expense name and amount
              label: (context: any) => {
                const expense = paymentsData[context.dataIndex].Expense;
                const amount = paymentsData[context.dataIndex].amount;
                return `${expense}: R${amount}`;
              },
            },
          },
        },
      };
    return (
        <div className='bg-slate-800 rounded-2xl'>
            <h2 className='text-white text-2xl text-center font-semibold pb-3'>Payments</h2>
            <Bar data={chartData} options={barChartOptions} />;
        </div>
        
    ) 
    
};

export default PaymentsGraph