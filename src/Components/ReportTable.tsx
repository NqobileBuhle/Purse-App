import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "./Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = report.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mt-5 mx-2 md:mx-5 border rounded-lg overflow-x-auto ml-0 md:ml-32">
      <div className="overflow-x-scroll md:overflow-auto">
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
                <th
                  key={index}
                  className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-300">
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  {transaction.id}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  {transaction.date}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  {transaction.expense}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  {transaction.description}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  {transaction.categoryName}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  R{transaction.amount.toFixed(2)}
                </td>
                <td className="py-2 px-3 md:py-3 md:px-4 border-b text-sm md:text-base">
                  <button className="text-blue-500 hover:underline">
                    <FaRegEdit size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {report.length > 0 && (
        <div className="flex justify-end mt-1 mr-1 p-1">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={report.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}

      {report.length === 0 && (
        <div className="flex justify-center text-xl md:text-3xl p-5">
          No Transactions Found!
        </div>
      )}
    </div>
  );
};

export default ReportTable;
