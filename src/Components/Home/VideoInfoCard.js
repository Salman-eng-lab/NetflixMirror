import React from 'react'

const VideoInfoCard = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black absolute pt-[20%] pl-24">
       <div className='w-1/4'>
       <h1 className='text-6xl font-bold text-white'>
            {title}
        </h1>
        <p className='text-lg text-opacity-80 mt-4 text-white'>{overview}</p>
       </div>
       <div className='mt-12'>
        <button className='bg-white py-2 px-8 font-bold rounded-md'>
            ▶️ Play
        </button>
        <button className='bg-gray-500 py-2 px-8 ml-4 bg-opacity-50 text-white font-bold rounded-md'>
            More info
        </button>
       </div>
    </div>
  )
}
export default VideoInfoCard
