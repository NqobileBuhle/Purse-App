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
        return data.filter(item => {
          const itemDate= new Date(item.date);

          switch (selectedRange) {
            case 'Day':
                return (
                  itemDate.toDateString() === currentDate.toDateString()
                );

            case 'Week':
              const oneWeekAgo = new Date();
              oneWeekAgo.setDate(currentDate.getDate() - 7);
              return itemDate >= oneWeekAgo && itemDate <= currentDate;

            case 'Month':
                const oneMonthAgo = new Date();
                oneMonthAgo.setMonth(currentDate.getMonth() - 1);
                return itemDate >= oneMonthAgo && itemDate <= currentDate;

            case 'Year':
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
                return itemDate >= oneYearAgo && itemDate <= currentDate;

            default:
                return true;  
           

        }
    });
  }

  return (
    <div className='flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-lg'>
            {/* Map over time ranges to create buttons */}
            <div className="flex space-x-4">
                {(['Day', 'Week', 'Month', 'Year'] as TimeRange[]).map((range) => (
                    <button
                        key={range}
                        onClick={() => setSelectedRange(range)}
                        className={`px-4 py-2 rounded-full ${
                            selectedRange === range ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'
                        } focus:outline-none  focus:ring-orange-500 focus:ring-opacity-50`}
                    >
                        {range}
                    </button>
                ))}
            </div>

            {/* Display filtered data */}
            <ul>
                {filterData().map(item => (
                    <li key={item.id}>{item.date}</li>
                ))}
            </ul>
        </div>
  )
}
