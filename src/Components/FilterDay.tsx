import {useState} from 'react'

type TimeRange = 'Day' | 'Week'| 'Month' | 'Year';

export const FilterDay = () => {

    const [selectedRange, setSelectedRange] = useState<TimeRange>('Week');

    const data = [
        {id: 1, date:'2024-10-01'},
        {id: 2, date:'2024-10-18'},
        {id: 3, date:'2024-09-21'},
    ];

    //Filtering based on selected range
    const filterData = () => {

        const currentDate = new Date();

        switch (selectedRange) {
            case 'Day':
                return data.filter(items => {
                    const itemDate = new Date(items.date);
                    return itemDate.toDateString() === currentDate.toDateString();
                });
            case "Week":
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(currentDate.getDate() - 7);
                return data.filter(item => new Date(item.date) >= oneWeekAgo);
            case "Month":
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(currentDate.getMonth() - 1);
                return data.filter(item => new Date(item.date) >= oneMonthAgo);
            case "Year":
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
                return data.filter(item => new Date(item.date) >= oneYearAgo);
            default:
                return data;

        }
    };
    
    const filteredData = filterData();
    const timeRanges = ["Day", "Week", "Month", "Year"] as const;

  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg">
      <div className="flex space-x-4">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-4 py-2 rounded-full bg-gray-700 text-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 ${
              selectedRange === range ? "bg-orange-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      <div className="filtered-data mt-4">
        <h2>Filtered Data ({selectedRange})</h2>
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>{item.date}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
