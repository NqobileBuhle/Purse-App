
import React from 'react';
import { FaBeer, FaCcVisa } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";

function Card() {
    return (
        <div className="bg-gray-800 w-[25rem] p-6 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
           <div>
                <h1 className="text-xl font-bold mb-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg ">My Cards</h1>
            </div>
            <div className="relative bg-cover bg-gradient-to-r from-purple-500 to-orange-500 bg-center p-6 rounded-xl max-w-xs w-100 h-50 shadow-lg">
                <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                        <h5 className="text-sm font-normal text-white">Visa Classic</h5>
                    </span>
                    <FcSimCardChip size={50} />
                </div>
                <div className="mt-10 flex justify-between items-end">
                    <div className="space-y-1">
                        <h6 className="text-xs text-white">Card Number</h6>
                        <h5 className="mt-1 text-lg tracking-wider text-white">**** **** **** 3020</h5>
                        <h5 className="mt-5 text-sm text-white">Prem Kumar Shahi</h5>
                    </div>
                    <div className="text-right">
                        <h6 className="text-xs text-white">Valid Thru</h6>
                        <h5 className="text-sm text-white">05/28</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
