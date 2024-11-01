import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const RecentTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('/Report.json')
            .then((response) => response.json())
            .then((data) => setTransactions(data.transactions))
            .catch((error) => console.error('Error fetching transactions:', error));
    }, []);
    const navigate = useNavigate();
    const handletotransrepo = () => {
        // Navigate to the dashboard after login (no authentication required)
        navigate("/transreport");
    };
    return (
<<<<<<< HEAD
        <div className="bg-gray-800 text-white  p-6  w-70 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
=======
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg  p-6  w-80">
>>>>>>> c2d86f2e4a5cf4370666cc856c057082c077aab9
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <button onClick={handletotransrepo} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">...</button>
            </div>
            <ul>
                {transactions.slice(0, 4).map((transaction) => (
                    <li key={transaction.transactionId} className="flex justify-between items-center mb-4">
                        <div className="flex items-center ">
                            <div className="w-8 h-8 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg flex justify-center items-center rounded-full mr-3">
                                <span className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm">
                                    {transaction.amount > 0 ? '+' : '-'}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">{transaction.Expense}</p>
                                <p className="text-xs p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">{transaction.Category}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`text-sm font-medium ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {transaction.amount > 0 ? `+${transaction.amount.toFixed(2)}` : `-${Math.abs(transaction.amount).toFixed(2)}`}
                            </p>
                            <p className="text-xs text-gray-400">{transaction.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentTransactions;
