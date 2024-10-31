import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components for each section
import Card from './components/Card';
import Transactions from './Components/RecentTransactions';
import Activity from './components/Activity';
import Payments from './components/Payments';
import Balance from './components/Balance';
import SimpleBarChart from './components/SimpleBarChart ';
import { FilterDay } from './Components/FilterDay';
import ActivitiesGraph from './Components/ActivitiesGraph';
import PaymentsGraph from './Components/PaymentsGraph';
import Sidebar from './Components/sidebar';


function Dashboard() {
    const navigate = useNavigate();
    const handletotransrepo = () => {
        // Navigate to the dashboard after login (no authentication required)
        navigate("/transreport");
    };
    return ( 
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow p-4 md:ml-32 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
                <FilterDay className="mb-[20rem]" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

                    {/* Holder for Component 1 and Component 2 */}
                    <div className="md:col-span-2 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 rounded text-white flex flex-col md:flex-row gap-4">
                        {/* Component 1 */}
                        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg flex-1 p-4 rounded text-white flex items-center justify-center">
                            <Card />
                         
                        </div>

                        {/* Component 2 */}
                        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg flex-1 p-4 rounded text-white flex items-center justify-center">
                            <Transactions />
                        </div>
                    </div>

                    {/* Component 3 on the right, spanning two rows on larger screens */}
                    <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 rounded text-white flex  md:row-span-2 md:col-span-1">
                        <Balance />
                    </div>

                    {/* Component 4 below Components 1 and 2 */}
                    <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 rounded text-white flex items-center justify-center">
                        <ActivitiesGraph />
                    </div>

                    {/* Component 5 below Component 4 */}
                    <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-4 rounded text-white flex items-center justify-center">
                        <PaymentsGraph />
                    </div>
                </div>
            </div>
        </div>



//         <div className="bg-gray-100 flex items-center justify-center">
//             <Sidebar/>
//   <div className="container mx-auto p-4">
//                 <FilterDay className="mb-[20rem]" />
//     <div className="grid grid-cols-4 gap-2">
//         <div className="col-span-3 bg-blue-200  ml-[10rem] flex h-50 rounded-lg">
//                         <Card />
//                         <Transactions/>
//       </div>
    
//       <div className="col-span-1 bg-blue-200 h-80 rounded-md">
//                         <Balance />
//       </div>
//                     <div className="col-span-3 bg-blue-200  gap-8 ml-[10rem] flex h-50 rounded-lg">
//                         <ActivitiesGraph />
//                         <PaymentsGraph />
//                     </div>

                
        
      
//     </div>
//   </div>
// </div>





    );
}

export default Dashboard;
