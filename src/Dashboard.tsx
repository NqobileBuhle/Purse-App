import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components for each section
import Card from './Components/Card';
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
    
        <div className="bg-gray-100 flex items-center justify-center">
            <Sidebar/>
            <div className="container mx-auto p-4">
            <FilterDay  />
                <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3  ml-[10rem] flex h-50 rounded-lg">
                        <Card />
                        <Transactions/>
                </div>
    
                <div className="col-span-1 bg-blue-200 h-80 rounded-md">
                        <Balance />
                    </div>

                    {/* Component 4 below Components 1 and 2 */}
                    <div className="col-span-3 gap-8 ml-[10rem] flex h-50 rounded-lg my-10">
                        <ActivitiesGraph />
                        <PaymentsGraph />
                    </div>
            </div>
       



{/* //         <div className="bg-gray-100 flex items-center justify-center">
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
//                     </div> */}

                
        
      
   </div>
   </div>
// </div>





    );
}

export default Dashboard;
