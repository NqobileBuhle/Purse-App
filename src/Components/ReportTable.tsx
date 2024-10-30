import React from "react";
import { FaRegEdit } from "react-icons/fa";

// Define types for transaction and props
interface Transaction {
	id: string;
	date: string;
	expense: string;
	description: string;
	category: string;
	categoryName: string;
	amount: number;
}

interface ReportTableProps {
	report: Transaction[];
}

const ReportTable: React.FC<ReportTableProps> = ({ report }) => {
	return (
		<div className="mt-5 mx-5 border rounded-lg overflow-x-auto">
			<table className="w-full text-left border-collapse">
				<thead className="bg-gray-400">
					<tr>
						{[
							"Transaction ID",
							"Date",
							"Expense",
							"Description",
							"Category",
							"Amount (ZAR)",
							"Update",
						].map((header, index) => (
							<th key={index} className="py-3 px-4 border-b">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{report.map((transaction) => (
						<tr key={transaction.id} className="hover:bg-gray-300">
							<td className="py-3 px-4 border-b">{transaction.id}</td>
							<td className="py-3 px-4 border-b">{transaction.date}</td>
							<td className="py-3 px-4 border-b">{transaction.expense}</td>
							<td className="py-3 px-4 border-b">{transaction.description}</td>
							<td className="py-3 px-4 border-b">{transaction.categoryName}</td>
							<td className="py-3 px-4 border-b">
								R{transaction.amount.toFixed(2)}
							</td>
							<td className="py-3 px-4 border-b">
								<button className="text-blue-500 hover:underline">
									<FaRegEdit size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ReportTable;
