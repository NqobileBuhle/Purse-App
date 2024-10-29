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
    const [data, setData] = useState<{id: number, date: string}[]>([]);
    const[loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //Fetchinf data for the graphs
    const fetchData = async () => {

      const url = '../../public/Report.json'

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

  //Preparing graphs
  const chartData = filterData().map(item => ({ x: item.date, y: 1 }));
    
    const barChartData = {
        labels: chartData.map(data => data.x),
        datasets: [{
            label: 'Occurrences',
            data: chartData.map(data => data.y),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };

    const lineChartData = {
        labels: chartData.map(data => data.x),
        datasets: [{
            label: 'Occurrences',
            data: chartData.map(data => data.y),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }]
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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

            {/* Display filtered data in graphs */}
            <div className='grid cols-1 md:grid-cols-2'>
              {/* Bar chart */}
              <div>
                  <h2 className='tetx-lg font-semibold mb-4'>Payments</h2>
                  <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
              </div>

              {/* Line chart */}
              <div>
                <h2 className='tetx-lg font-semibold mb-4'>Activity</h2>
                <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
              </div>
            </div>
            

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
