import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'; 

interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
  date: Date;
}

const TransactionDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newAmount, setNewAmount] = useState<number>(0);
  const [newDescription, setNewDescription] = useState<string>("");

  const handleAddTransaction = () => {
    if (newDescription && newAmount !== 0) {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        description: newDescription,
        category: "Custom",
        amount: newAmount,
        date: new Date(), // Capture the current date
      };
      setTransactions([...transactions, newTransaction]);
      setNewAmount(0);
      setNewDescription("");
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

  return (
    <div className="p-4">
      {/* Dashboard */}
      <h2 className="text-lg font-bold ml-4">:: Dashboard</h2>
      <div className="bg-black text-white p-6 rounded-3xl shadow-lg mt-4">
        <div className="mt-4">
          {/* Dynamic total balance */}
          <h3 className="text-4xl font-bold">R {calculateBalance().toLocaleString()}</h3>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">All Expenses</h2>
        <button className="text-gray-500">View All</button>
      </div>

      {/* Grouped Transactions by Date */}
      <ul className="space-y-4">
        {["Today", "Yesterday", ...new Set(transactions.map(t => formatDate(t.date)).filter(d => d !== "Today" && d !== "Yesterday"))]
          .map(dateLabel => (
            <div key={dateLabel}>
              <h3 className="text-gray-700 mt-6">{dateLabel}</h3>
              {transactions
                .filter(transaction => formatDate(transaction.date) === dateLabel)
                .map(transaction => (
                  <li key={transaction.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
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

      {/* Add Transaction */}
      <div className="fixed w-full p-4 bg-white shadow-lg flex justify-end">
        <div className="flex-grow">
          <input
            type="number"
            className="w-full border p-4 text-3xl text-center"
            placeholder="R 0.00"
            value={newAmount === 0 ? '' : newAmount}
            onChange={(e) => setNewAmount(parseFloat(e.target.value))}
          />
          <div className="mt-4">
            <input
              type="text"
              className="w-full border p-2"
              placeholder="Expense Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
        </div>
        
        <button onClick={handleAddTransaction}>
          <PlusIcon className="h-7 w-7 text-white bg-black rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default TransactionDashboard;
