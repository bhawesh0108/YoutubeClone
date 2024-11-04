import React from 'react'
import Image from '../images/profile.jpg'

const LiveChatItem = ({name,comment}) => {
  return (
    <div className='flex gap-3 text-white items-center p-4'>
        <div className='rounded-full w-[30px] h-[30px] overflow-hidden'>
                <img className="object-cover rounded-full" src={Image} alt="progileImg" />
        </div>
        <div className='flex gap-2'>
        <h2 className='text-xs font-bold'>@{name}</h2>
        <h2 className='text-xs'>{comment}</h2>
        </div>


    </div>
  )
}

export default LiveChatItem