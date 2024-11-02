import React from 'react'


const Video = ({id,snippet,statistics}) => {

  const {channelTitle,title} = snippet;
  const {viewCount} = statistics;
 
return (

       <div className='flex flex-col h-[100%] w-[100%] gap-2 text-white'>
        <div className='h-[60%] w-full overflow-hidden rounded-lg bg-blue-500'>
         <img className='h-full w-full object-cover rounded-lg' src={snippet.thumbnails.high.url} />
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