import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { GiPieChart } from "react-icons/gi";
import { FaRegKeyboard } from "react-icons/fa";

// Define icons for categories
const categoryIcons = {
    "Housing": <IoMdHome size={20} />,
    "Transportation": <GiPieChart size={20} />,
    "FoodDining": <FaRegKeyboard size={20} />,
    "Entertainment": <IoMdSettings size={20} />,
    "PersonalFamily": <IoMdSettings size={20} />,
};

ChartJS.register(ArcElement, Tooltip, Legend);

function Balance() {
    const [transactions, setTransactions] = useState([]);
    const openingBalance = 4300; // Example opening balance

    useEffect(() => {
        fetch("/Report.json")
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data.transactions);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    // Calculate totals
    const calculateTotals = (transactions) => {
        const totalSpent = transactions.reduce((total, transaction) => total + transaction.amount, 0);
        const availableBalance = openingBalance - totalSpent;
        return { totalSpent, availableBalance };
    };

    const { totalSpent, availableBalance } = calculateTotals(transactions);

    // Calculate percentage of the balance used
    const percentageUsed = ((totalSpent / openingBalance) * 100).toFixed(0);

    // Data for the circular progress chart
    const data = {
        datasets: [
            {
                data: [totalSpent, openingBalance - totalSpent],
                backgroundColor: ['#8b5cf6', '#333'],
                borderWidth: 0,
            },
        ],
    };

    // Options for the circular chart
    const options = {
        cutout: '80%', // Inner radius for the donut effect
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
        },
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg rounded-lg pt-6 shadow-lg text-white flex flex-col items-center">
            <div className="flex justify-center items-center mb-6">
                <div className="relative">
                    {/* Increase the size of the Doughnut chart */}
                    <Doughnut data={data} options={{ ...options, cutout: '90%' }} className='z-10' width={100} height={100} />
                    <div className="absolute inset-0 z-1 flex flex-col items-center justify-center">
                        <p className="text-2xl font-semibold p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">{percentageUsed}%</p>
                        <p className="text-xs text-green-500">balance</p>
                    </div>
                </div>
            </div>
            <p className="text-4xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold mb-4">R{availableBalance.toFixed(2)}</p>
            <h6 className="text-lg  p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">Available Balance</h6>

            <div className="h-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg rounded-full overflow-hidden mb-4">
                <div className="h-full" style={{ width: `${percentageUsed}%`, backgroundColor: "#7F00FF" }}></div>
            </div>

            <div className="space-y-2">
                {Object.keys(categoryIcons).map((category) => {
                    const totalCategoryAmount = transactions
                        .filter(t => t.categoryName === category)
                        .reduce((sum, t) => sum + t.amount, 0);

                    return (
                        <div key={category} className="flex justify-between items-center text-sm">
                            <span className="flex items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
                                {categoryIcons[category]}
                                <span className="ml-2  bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">{category}</span>
                            </span>
                            <span className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">R{totalCategoryAmount.toFixed(2)}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Balance;
