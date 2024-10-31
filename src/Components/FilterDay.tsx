import React, {useEffect, useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import {Bar, Line } from 'react-chartjs-2';
import { Chart, Filler } from 'chart.js';
import myReport from '../../public/Report.json'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);
Chart.register(Filler);

//time range type
type TimeRange = 'Day' | 'Week' | 'Month' | 'Year';

//user profile type
type User = {
  name: string;
  profilePic: string;
};

//prop type to recieve user as a prop
interface FilterComponentProps {
  currentUser: User | null;
}

export const FilterDay: React.FC<FilterComponentProps> = ({ currentUser }) => {

    const [selectedRange, setSelectedRange] = useState<TimeRange>('Week');
    const [data, setData] = useState<{id: number, date: string}[]>([]);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //Fetchinf data for the graphs
    const fetchData = async () => {

      const url = '../../Report.json'

      setLoading(true);
      setError(null);

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myReport),

      })
        .then (response => response.json())
        .then(data => {

          console.log(data);

        })
        .catch (error => {
          console.log('Error fetching data', error);
        })

    };

    useEffect (() => {
      fetchData();
    }, []);

  //Filtering based on selected range
  const filterData = () => {

    const currentDate = new Date();
    return data.filter(item => {
      const itemDate = new Date(item.date);

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
    <>
      <div className="flex justify-center items-center p-4 rounded-lg  text-white">
        {/* Time Range Buttons */}
        <div className="flex space-x-2 md:space-x-2">
          {(['Day', 'Week', 'Month', 'Year']).map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full ${selectedRange === range ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 text-sm md:text-base`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Search, Notifications, and Profile */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Search Icon */}
          <div className="cursor-pointer">
            <CiSearch size={20} className="md:size-26" />
          </div>

          {/* Notifications with Badge */}
          <div className="relative cursor-pointer">
            <IoIosNotifications size={20} className="md:size-26" />
            <span className="absolute top-0 right-1 h-2 w-2 md:h-3 md:w-3 rounded-full ring-2 ring-gray-900 bg-orange-500"></span>
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            {currentUser ? (
              <div className="flex items-center space-x-2">
                {/* Show name only on medium screens and above */}
                <span className="hidden md:inline-block text-gray-400">{currentUser.name}</span>
                <img
                  src={currentUser.profilePic}
                  alt="Profile"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-600"
                />
              </div>
            ) : (
              <div className="text-gray-400 text-sm hidden md:block">Sign in to view profile</div>
            )}
          </div>
        </div>
      </div>
        
      </>
  )
}