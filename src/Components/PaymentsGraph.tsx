import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface Transaction {
  transactionId: string;
  date: string;
  Expense: string;
  description: string;
  category: string;
  categoryName: string;
  amount: number;
}
<<<<<<< HEAD
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
=======
>>>>>>> 4779c52c2ad8fc0566a497d408c6ea87ac2a8c26

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
          .filter(transaction => {
            console.log("Transaction Category:", transaction.category); // Log each transaction's category
            return transaction.category === "Payments";
          }) // Filter for Payments category
          .reduce((acc, transaction) => {
            const day = getDayOfWeek(transaction.date); // Get the day of the week
            acc[day] = (acc[day] || 0) + transaction.amount; // Sum amounts for each day
            return acc;
          }, { ...weeklyPayments });
          console.log("Filtered payments by day:", paymentsByDay); // Log the filtered payments by day

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
        <div className='bg-slate-800 rounded-2xl'>
            <h2 className='text-white text-2xl text-center font-semibold pb-3'>Payments</h2>
            <Bar data={chartData} />;
        </div>

    )

};

export default PaymentsGraph
