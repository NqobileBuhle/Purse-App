import { CiSearch } from "react-icons/ci";
import React, { useState } from "react";

//Anotating the props for the component
interface ReportFilteringProps {
	selectedCategory: string; // Prop for the currently selected category
	onCategoryChange: (category: string) => void; // Function to handle category changes
	onSearch: (query: string) => void; // Function to handle search input submission
}

const ReportFiltering: React.FC<ReportFilteringProps> = ({
	selectedCategory,
	onCategoryChange,
	onSearch,
}) => {
	const [category, setCategory] = useState<string>("All");

	const [searchQuery, setSearchQuery] = useState("");

	// Array of category options
	const categories: string[] = [
		"All",
		"Housing",
		"Transportation",
		"Food & Dining",
		"Health & Wellness",
		"Personal & Family",
		"Entertainment",
		"Financial Obligations",
		"Miscellaneous",
	];

	// Function to handle the search form submission
	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault();
		onSearch(searchQuery);
	};

	return (
		<div className="flex flex-col  md:flex-row justify-evenly mx-5 border mt-5 p-5 rounded-3xl">
			<div className="w-full md:w-1/2 mb-3 md:mb-0">
				<form className="flex w-full" onSubmit={handleSearch}>
					<div className="relative w-full">
						<input
							type="text"
							id="search"
							name="search"
							placeholder="Search Transaction"
							value={searchQuery}
							onChange={(event) => setSearchQuery(event.target.value)}
							className="w-full peer border border-gray-500 rounded-full focus:outline-none focus:border-orange-500 text-black h-10 p-2 ps-5 pl-10"
						/>
						<CiSearch
							size={28}
							className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 peer-focus:text-orange-500"
						/>
					</div>

					<button
						type="submit"
						className="border border-gray-500 px-5 ml-3 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-full"
					>
						Search
					</button>
				</form>
			</div>

			<div className="w-full md:w-1/4">
				<label className="mr-2">Filter by Category:</label>
				<select
					value={selectedCategory}
					onChange={(event) => onCategoryChange(event.target.value)}
					className="border rounded p-2 focus:border-orange-500 w-full"
				>
					{categories.map((category, index) => (
						<option key={index} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default ReportFiltering;
