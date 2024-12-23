import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/solid';
import Sidebar from './sidebar';
import ReportTable from './ReportTable';
import data from '../../public/Report.json';

interface Transaction {
  id: string;
  description: string;
  expense: string;
  category: string;
  amount: number;
  date: Date;
}

const TransactionDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newAmount, setNewAmount] = useState<number>(0);
  const [newDescription, setNewDescription] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate(); 

  const categories = [
    "Housing",
    "Transportation",
    "Food & Dining",
    "Health & Wellness",
    "Personal & Family",
    "Entertainment",
    "Financial Obligations",
    "Miscellaneous",
  ];

  useEffect(() => {
    const initialTransactions = data.transactions.map((transaction) => ({
      id: transaction.transactionId,
      description: transaction.description,
      expense: transaction.expense,
      category: transaction.category,
      amount: transaction.amount,
      date: new Date(transaction.date),
    }));
    setTransactions(initialTransactions);
  }, []);

  const handleAddTransaction = () => {
    if (newDescription && newAmount !== 0 && newCategory) {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        description: newDescription,
        expense: "Expense",
        category: newCategory,
        amount: newAmount,
        date: new Date(),
      };
      setTransactions([...transactions, newTransaction]);
      setNewAmount(0);
      setNewDescription("");
      setNewCategory("");
      setIsModalOpen(false);
    }
  };

  const calculateBalance = (): number => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const formatDate = (date: Date): string => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle navigation to TransactionsReport page
  const handleViewAll = () => {
    navigate("/transreport"); // Navigate to TransactionsReport
  };

  return (
    <div className='flex flex-col md:flex-row '>
      <Sidebar />
      <div className=" w-full md:ml-36 mr-2  mx-auto min-h-screen mt-1 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-900 rounded-lg">
        <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-3xl shadow-lg">
          <h2 className="text-xl md:text-3xl font-bold">:: Dashboard</h2>
          <div className="text-white p-4 md:p-6 rounded-xl md:rounded-3xl shadow-lg mt-4 bg-gray-900">
            <h3 className="text-2xl md:text-4xl font-bold">R {calculateBalance().toLocaleString()}</h3>
          </div>

          {/* Transaction List */}
          <div className="mt-4 flex justify-between items-center">
            <h2 className="text-lg font-bold">All Expenses</h2>
            <button 
              className="text-gray-500 bg-gray-200 p-2 md:p-3 rounded-xl md:rounded-3xl shadow-md"
              onClick={handleViewAll}
            >
              View All
            </button>
          </div>

          <ul className="space-y-2 md:space-y-4">
            {["Today", "Yesterday", ...new Set(transactions.map(t => formatDate(t.date)).filter(d => d !== "Today" && d !== "Yesterday"))]
              .map(dateLabel => (
                <div key={dateLabel}>
                  <h3 className="text-gray-700 mt-4 md:mt-6">{dateLabel}</h3>
                  {transactions
                    .filter(transaction => formatDate(transaction.date) === dateLabel)
                    .map(transaction => (
                      <li key={transaction.id} className="bg-gray-200 p-3 md:p-4 rounded-xl md:rounded-3xl shadow-md flex justify-between items-center mb-2 md:mb-3">
                        <div>
                          <h4 className="font-bold">{transaction.description}</h4>
                          <p className="text-gray-500">{transaction.category}</p>
                        </div>
                        <span className="text-lg font-bold">R {transaction.amount.toLocaleString()}</span>
                      </li>
                  ))}
                </div>
            ))}
          </ul>

          {/* Add Expense Button */}
          <button onClick={toggleModal} className="fixed bottom-12 right-4 md:bottom-16 md:right-8 bg-black text-white p-3 md:p-4 rounded-full shadow-lg">
            <PlusIcon className="h-5 w-5" />
          </button>

          {/* Modal for Adding New Transaction */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="w-11/12 max-w-md p-4 md:p-8 bg-white rounded-lg shadow-lg relative">
                <button className="absolute top-2 right-2 text-red-500 hover:text-gray-800 font-bold" onClick={toggleModal}>×</button>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Add New Expense</h2>
                <div>
                  <input type="number" className="w-full border p-2 md:p-4 text-2xl md:text-3xl text-center mb-4" placeholder="R 0.00" value={newAmount === 0 ? '' : newAmount} onChange={(e) => setNewAmount(parseFloat(e.target.value))} />
                  <input type="text" className="w-full border p-2" placeholder="Expense Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                  <select className="w-full border p-2 mb-4" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <button onClick={handleAddTransaction} className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded-lg mt-4 md:mt-6">Add Expense</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionDashboard;
