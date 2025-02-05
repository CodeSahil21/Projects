import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const FeedCardSkeleton = () => {
  return (
    <div className="p-4 hover:bg-slate-900 transition-all cursor-pointer border-b border-gray-700 bg-gray-800 rounded-lg animate-pulse">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1 flex items-center justify-center">
          <FaUserCircle className="text-4xl text-gray-700" />
        </div>
        <div className="col-span-11">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-24 h-4 bg-gray-700 rounded mr-2"></div>
              <div className="w-16 h-4 bg-gray-700 rounded"></div>
            </div>
            <div className="w-20 h-4 bg-gray-700 rounded"></div>
          </div>
          <div className="mt-2 space-y-2">
            <div className="w-full h-4 bg-gray-700 rounded"></div>
            <div className="w-full h-4 bg-gray-700 rounded"></div>
            <div className="w-full h-4 bg-gray-700 rounded"></div>
          </div>
          <div className="flex justify-between mt-4 text-gray-500 w-[90%]">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCardSkeleton;