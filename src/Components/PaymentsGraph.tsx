import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface Transaction {
  transactionId: string;
  date: string;
  Expense: string;
  description: string;
  Category: string;
  amount: number;
}
<<<<<<< HEAD
=======
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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },

        },
    };

    return (
        <div className='bg-slate-800 rounded-2xl h-[30rem] w-[30rem]'>
            <h2 className='text-white text-2xl text-center font-semibold pb-3'>Payments</h2>
            <Bar data={chartData} options={options}  />
        </div>

    )
>>>>>>> c2d86f2e4a5cf4370666cc856c057082c077aab9

const getDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getUTCDay()];
};

const PaymentsGraph: React.FC = () => {
  const [weeklyPayments, setWeeklyPayments] = useState<{ [key: string]: number }>({
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
  });

  useEffect(() => {
    fetch('/../public/Report.json')
      .then(response => response.json())
      .then((data: { transactions: Transaction[] }) => {
        const paymentsByDay = data.transactions
          .filter(transaction => transaction.Category === "Payments") // Filter for Payments category
          .reduce((acc, transaction) => {
            const day = getDayOfWeek(transaction.date); // Get the day of the week
            acc[day] = (acc[day] || 0) + transaction.amount; // Sum amounts for each day
            return acc;
          }, { ...weeklyPayments });

        setWeeklyPayments(paymentsByDay);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: Object.keys(weeklyPayments), // Days of the week
    datasets: [
      {
        label: 'Total payments recieved',
        data: Object.values(weeklyPayments), // Total payments for each day
        backgroundColor: '#f97316',
        borderColor: '#f97316',
        borderWidth: 1,
        
      },
    ],
  };

  return (
    <div style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '15px' }}>
      <h3 className = 'color-#fff text-center text-white'>Payments</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default PaymentsGraph;
