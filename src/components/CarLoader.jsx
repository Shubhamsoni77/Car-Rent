import React from 'react'

const CarLoader = () => {
  return (
    <div className="w-[550px] bg-white rounded-lg shadow-md overflow-hidden animate-pulse lg:w-[400px]">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-4 space-y-3">
      <div className="h-5 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-5 bg-gray-300 rounded w-1/3 mt-2"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CarLoader
