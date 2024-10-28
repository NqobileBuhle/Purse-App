import { FilterDay } from "./Components/FilterDay";


const App = () => {
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'; // Correct Heroicons v2 import
import SignIn from './Components/SignIn';





interface Transaction {
  id: string;
  description: string;
  category: string;
  amount: number;
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newAmount, setNewAmount] = useState<number>(0);
  const [newDescription, setNewDescription] = useState<string>("");
  

  // Function to handle adding new transactions
  const handleAddTransaction = () => {
    if (newDescription && newAmount !== 0) {
      const newTransaction = {
        id: Date.now().toString(),
        description: newDescription,
        category: "Custom",
        amount: newAmount,
      };
      setTransactions([...transactions, newTransaction]);
      setNewAmount(0); // Reset amount input
      setNewDescription(""); // Reset description input
    }
  };

  // Calculate the total balance
  const calculateBalance = (): number => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  return (
    <div className="bg-red-700">
      <FilterDay />
    
    <div className="p-4">
      {/* Dashboard */}
      <SignIn/>
      <h2 className="text-lg">Dashboard</h2>
      <div className="bg-black text-white p-6 rounded-3xl shadow-lg">
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
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="font-bold">{transaction.description}</h4>
              <p className="text-gray-500">{transaction.category}</p>
            </div>
            <span className="text-lg font-bold">R {transaction.amount.toLocaleString()}</span>
          </li>
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
        {/* "+" button icon to add transaction */}
        <button onClick={handleAddTransaction}>
          <PlusIcon className="h-12 w-12 text-black -500" />
        </button>
      </div>
    </div>
  );
};

export default App;

