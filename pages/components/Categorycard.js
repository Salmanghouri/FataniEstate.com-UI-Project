import React from 'react'

const Categorycard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center" style={{minHeight: '160px'}}>
    <div className="w-16 h-16 bg-gray-100 rounded-lg" />
    <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
      Category 1
    </h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center" style={{minHeight: '160px'}}>
    <div className="w-16 h-16 bg-gray-100 rounded-lg" />
    <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
      Category 2
    </h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center" style={{minHeight: '160px'}}>
    <div className="w-16 h-16 bg-gray-100 rounded-lg" />
    <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
      Category 3
    </h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center" style={{minHeight: '160px'}}>
    <div className="w-16 h-16 bg-gray-100 rounded-lg" />
    <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
      Category 4
    </h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center" style={{minHeight: '160px'}}>
    <div className="w-16 h-16 bg-gray-100 rounded-lg" />
    <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
      Category 5
    </h2>
  </div>
  <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center" style={{minHeight: '160px'}}>
    <div className="w-16 h-16 bg-gray-100 rounded-lg" />
    <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
      Category 6
    </h2>
  </div>
</div>

  )
}

export default Categorycard