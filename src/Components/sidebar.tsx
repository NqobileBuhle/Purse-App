import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { GiPieChart } from 'react-icons/gi';
import { FaBookmark } from "react-icons/fa6";
import { FaRegKeyboard, FaLocationDot } from 'react-icons/fa6';
import { IoMdSettings } from "react-icons/io";



const Sidebar: React.FC = () => {
    return (
        <div className="hidden md:block sidebar fixed bottom-0 left-0 w-full sm:w-64 h-full sm:h-auto">
            <nav className="bg-gray-700 text-white h-full flex flex-col justify-between w-20 h-55 rounded">

                <div className="w-full py-10">
                    <a href="chart.html" className="flex items-center px-4 py-2 text-gray-300 hover:text-white rounded-lg mb-2">
                        <IoMdHome className="mr-4 mb-10" size={25} />
                    </a>
                    <a href="chart.html" className="flex items-center px-4 py-2 text-gray-300 hover:text-white rounded-lg mb-2">
                        <GiPieChart className="mr-4 mb-10" size={25} />
                    </a>
                    <a href="form.html" className="flex items-center px-4 py-2 text-gray-300 hover:text-white rounded-lg mb-2">
                        <FaRegKeyboard className="mr-4 mb-10" size={25} />
                    </a>
                    <a href="form.html" className="flex items-center px-4 py-2 text-gray-300 hover:text-white rounded-lg mb-2">
                        <FaBookmark className="mr-4 mb-10" size={25} />
                    </a>
                    <a href="location.html" className="flex items-center px-4 py-2 text-gray-300 hover:text-white rounded-lg mb-2">
                        <FaLocationDot className="mr-4 mb-60" size={25} />
                    </a>
                    <a href="location.html" className="flex items-center px-4 py-2 text-gray-300 hover:text-white rounded-lg mb-2">
                        <IoMdSettings className="mr-4" size={25} />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;