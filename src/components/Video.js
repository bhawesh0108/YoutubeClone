import React from 'react'

const Video = ({snippet,statistics}) => {

  const {channelTitle,title} = snippet;
  const {viewCount} = statistics;
return (
    <div className='flex flex-col h-80 w-64 gap-2 text-white'>
        <div className='h-[50%] w-full'>
         <img className='h-full w-full object-cover' src={snippet.thumbnails.medium.url} />
        </div>
        <div className='flex flex-col gap-2 overflow-hidden text-sm font-bold'>
            <h3>{title}</h3>
            <p className='text-[#AAAAAA]'>{channelTitle}</p>
            <p className='text-[#AAAAAA]'>{viewCount} views</p>

        </div>

    </div>
  )
}

export default Video