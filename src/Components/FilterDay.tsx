import React, {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

//time range type
type TimeRange = 'Day' | 'Week'| 'Month' | 'Year';

//user profile type
type User = {
  name: string;
  profilePic: string;
};

//prop type to recieve user as a prop
interface FilterComponentProps {
  currentUser: User | null;
}

export const FilterDay: React.FC<FilterComponentProps> = ({currentUser}) => {

    const [selectedRange, setSelectedRange] = useState<TimeRange>('Week');

    // will replace with report database/API
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
    <div className='flex justify-evenly items-center bg-gray-900 p-4 rounded-lg shadow-lg text-white'>
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
            <ul className=''>
                {filterData().map(item => (
                    <li key={item.id}>{item.date}</li>
                ))}
            </ul>

            {/* Search, notifs and user profile section */}
            <div className="flex items-center space-x-6 ">
              {/* search */}
              <div className="cursor-pointer">
                <CiSearch size={26}/>
                
              </div>
              {/* notifs */}
              <div className="relative cursor-pointer">
                <IoIosNotifications size={26} />
                <span className='absolute top-0 right-1 h-2 w-2 rounded-full ring-2 ring-gray-900 bg-orange-500'></span>
              </div>
              {/* profile signed in */}
              <div className='flex items-center space-x-2'>
                {currentUser ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">{currentUser.name}</span>
                    <img
                      src={currentUser.profilePic}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border-2 border-gray-600"
                    />
                </div>
              ) : (
                <div className="text-gray-400">Sign in to view profile</div>
              )}

              </div>
            </div>
        </div>
  )
}
