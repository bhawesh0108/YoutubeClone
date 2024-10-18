import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";
import { BsLightbulbFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from 'react-redux';


const SideNav = () => {

   const showSideNav = useSelector(store=>store.appSlice.showSideNav);

   if(!showSideNav)
    return null;

  return (
    <div className="w-[15%] text-white flex flex-col gap-2 px-4 py-2 mt-2">
        <div className='border-b-[0.5px] mb-2 pb-4 border-slate-300'>
            <ul className='font-bold text-md'>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><IoMdHome />Home</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><SiYoutubeshorts /> Shorts</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><MdSubscriptions />Subscriptions</li>
            </ul>
        </div>

        <div className='border-b-[0.5px] mb-2 pb-4 border-slate-300'>
        <ul className='font-bold text-md'>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><GrChannel />Your Channel</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><MdOutlinePlaylistAddCheck />Playlists</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><FaHistory />History</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><IoPlaySharp />Your Videos</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><BsLightbulbFill />Courses</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><MdOutlineWatchLater />Watch Later</li>
                <li className='flex items-center gap-2 p-2  border-[#272727] rounded-lg hover:bg-[#272727]'><AiFillLike />Liked Videos</li>
        </ul>

        </div>
      

    </div>
  )
}

export default SideNav