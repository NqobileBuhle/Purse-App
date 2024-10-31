import React from "react";

interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	paginate: (pageNumber: number) => void;
	currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
	itemsPerPage,
	totalItems,
	paginate,
	currentPage,
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const maxPageNumbersToShow = 5;

	let startPage = Math.max(
		1,
		currentPage - Math.floor(maxPageNumbersToShow / 2)
	);
	let endPage = startPage + maxPageNumbersToShow - 1;

	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
	}

	const pageNumbers = [];
	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	const handleNext = () => {
		if (currentPage < totalPages) paginate(currentPage + 1);
	};

	const handlePrevious = () => {
		if (currentPage > 1) paginate(currentPage - 1);
	};

	return (
		<nav className="flex items-center justify-center space-x-2">
			<button
				onClick={handlePrevious}
				disabled={currentPage === 1}
				className={`py-2 px-4 rounded ${
					currentPage === 1
						? "bg-gray-200 text-gray-500"
						: "bg-orange-500 text-white"
				}`}
			>
				Previous
			</button>

			<ul className="flex list-none">
				{pageNumbers.map((number) => (
					<li key={number} className="mx-1">
						<button
							onClick={() => paginate(number)}
							className={`py-2 px-4 rounded ${
								number === currentPage
									? "bg-orange-500 text-white"
									: "bg-gray-300 text-black"
							}`}
						>
							{number}
						</button>
					</li>
				))}
			</ul>

			<button
				onClick={handleNext}
				disabled={currentPage === totalPages}
				className={`py-2 px-4 rounded ${
					currentPage === totalPages
						? "bg-gray-200 text-gray-500"
						: "bg-orange-500 text-white"
				}`}
			>
				Next
			</button>
		</nav>
	);
};

export default Pagination;
