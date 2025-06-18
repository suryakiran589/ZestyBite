import React from 'react'

const Shimmer = () => {
  return (
     <div className="min-h-screen w-full bg-white flex flex-col gap-6 p-6 animate-pulse">
      <div className="h-12 bg-gray-300 rounded w-1/3"></div>

      <div className="h-48 bg-gray-300 rounded-md w-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9}).map((_, i) => (
          <div key={i} className="h-40 bg-gray-300 rounded-md"></div>
        ))}
      </div>
    </div>
  )
}

export default Shimmer
