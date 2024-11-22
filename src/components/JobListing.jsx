import React from 'react'

const JobListing = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-6">
        <div className="mb-6">
            <div className="text-gray-600 my-2">{ job.type }</div>
            <h3 className="text-xl font-bold">{ job.title }</h3>
        </div>
        <div className="mb-5 text-gray-700">
            { job.description}
        </div>
        <h3 className="text-indigo-500 font-semibold mb-3">{ job.salary } / Year</h3>
        <div className="border border-gray-100 mb-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center text-orange-700 mb-3 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg mr-2" />
            { job.location }
            </div>
            <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
            Read More
            </a>
        </div>
        </div>
    </div>
  )
}

export default JobListing
