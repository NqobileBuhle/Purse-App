import React, { useState, useEffect } from "react";
import reportData from "../../public/Report.json";
import ReportFiltering from "../Components/ReportFiltering";
import ReportTable from "../Components/ReportTable";

//Anotating the data from the json file
interface Transaction {
	id: string;
	date: string;
	expense: string;
	description: string;
	category: string;
	categoryName: string;
	amount: number;
}

const TransactionsReport: React.FC = () => {
	// States for storing all transactions and filtered transactions
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [filteredTransactions, setFilteredTransactions] = useState<
		Transaction[]
	>([]);

	useEffect(() => {
		const fetchedTransactions: Transaction[] = reportData.transactions
			.map((transaction) => ({
				id: transaction.transactionId,
				date: transaction.date,
				expense: transaction.expense,
				description: transaction.description,
				category: transaction.category,
				categoryName: transaction.categoryName, 
				amount: transaction.amount,
			}))
			.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

		setTransactions(fetchedTransactions);
		setFilteredTransactions(fetchedTransactions);
	}, []);

	// Function to handle changes on categories
	const handleFilterChange = (filtered: Transaction[]) => {
		setFilteredTransactions(filtered);
	};

	return (
		<>
			<ReportFiltering
				transactions={transactions}
				onFilterChange={handleFilterChange}
			/>
			<ReportTable report={filteredTransactions} />
		</>
	);
};

export default TransactionsReport;
