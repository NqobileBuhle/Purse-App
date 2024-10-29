import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

// Define the type for each data entry
interface DataEntry {
  category: string;
  value: number;
}

export const ActivitiesGraph: React.FC = () => {
  const [data, setData] = useState<DataEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Report.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log('Fetched data:', jsonData); // Log fetched data for debugging
        if (Array.isArray(jsonData)) {
          setData(jsonData);
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (err) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Prepare chart data
  const chartData = {
    labels: data.map(entry => entry.category),
    datasets: [
      {
        label: 'Values',
        data: data.map(entry => entry.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Values',
      },
    },
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Monthly Values Line Chart</h2>
      <div className="h-96">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ActivitiesGraph;
