import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoMdHome } from 'react-icons/io';
import { GiPieChart } from 'react-icons/gi';
import { FaBookmark } from "react-icons/fa6";
import { FaRegKeyboard, FaLocationDot } from 'react-icons/fa6';
import { IoMdSettings } from "react-icons/io";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const handletoSettings = () => {
        navigate("/Settings");
    };
    const handletodashboard = () => {
        navigate("/Dashboard");
    };
    const handletoaddtrans = () => {
        navigate("/addTrans");
    };
    const handletotransrepo = () => {
        navigate("/transreport");
    };

    return (
        <div className="fixed bottom-0 left-0 w-full md:w-64 md:h-full bg-gray-700">
            <nav className="text-white h-full flex sm:flex-row md:flex-col justify-between items-center md:items-start md:w-20 p-2 md:py-10">

                <a href="#" onClick={handletodashboard} className="flex flex-col items-center p-2 text-gray-300 hover:text-white rounded-lg">
                    <IoMdHome className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Home</span>
                </a>

                <a href="#" onClick={handletoaddtrans} className="flex flex-col items-center p-2 text-gray-300 hover:text-white rounded-lg">
                    <GiPieChart className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Add</span>
                </a>

                <a href="#" onClick={handletotransrepo} className="flex flex-col items-center p-2 text-gray-300 hover:text-white rounded-lg">
                    <FaRegKeyboard className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Report</span>
                </a>

                <a href="form.html" className="flex flex-col items-center p-2 text-gray-300 hover:text-white rounded-lg">
                    <FaBookmark className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Form</span>
                </a>

                <a href="location.html" className="flex flex-col items-center p-2 text-gray-300 hover:text-white rounded-lg">
                    <FaLocationDot className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Location</span>
                </a>

                <a href="#" onClick={handletoSettings} className="flex flex-col items-center p-2 text-gray-300 hover:text-white rounded-lg">
                    <IoMdSettings className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Settings</span>
                </a>

            </nav>
        </div>
    );
};

export default Sidebar;
