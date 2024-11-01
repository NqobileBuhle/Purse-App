import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoMdHome, IoMdSettings, IoMdLogOut } from "react-icons/io";
import { PlusIcon } from '@heroicons/react/24/solid';
import { FaRegKeyboard } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";

const Sidebar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
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

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="fixed bottom-0 left-0 w-full md:w-32 md:h-full bg-gray-800 dark:bg-gray-900 text-white flex md:flex-col items-center justify-between p-2 md:pt-4">
            <nav className="flex md:flex-col w-full justify-around md:justify-start items-center">
                <a href="#" onClick={handletodashboard} className="flex flex-col items-center p-2 text-gray-300 hover:text-white">
                    <IoMdHome className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Home</span>
                </a>
                <a href="#" onClick={handletoaddtrans} className="flex flex-col items-center p-2 text-gray-300 hover:text-white">
                    <PlusIcon className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Add</span>
                </a>
                <a href="#" onClick={handletotransrepo} className="flex flex-col items-center p-2 text-gray-300 hover:text-white">
                    <FaRegKeyboard className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Report</span>
                </a>
                <a href="#" onClick={handletoSettings} className="flex flex-col items-center p-2 text-gray-300 hover:text-white">
                    <IoMdSettings className="mb-1" size={25} />
                    <span className="text-xs hidden md:block">Settings</span>
                </a>
            </nav>
            <div className="flex md:flex-col items-center">
                <button onClick={toggleTheme} className="p-2 text-gray-300 hover:text-white">
                    {theme === 'dark' ? <BsSun size={25} /> : <BsMoon size={25} />}
                </button>
                <a href="#" className="p-2 text-gray-300 hover:text-white">
                    <IoMdLogOut size={25} />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
