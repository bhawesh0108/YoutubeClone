import React,{useEffect,useState} from 'react'
import { YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants';
import { BsTypeH1 } from 'react-icons/bs';

const SearchItem = ({id}) => {

    const [videoDetails,setVideoDetails] = useState(null)

    useEffect(()=>{
       
        fetchVideoDetails();

    },[]);

    const fetchVideoDetails = async ()=>{
        
        const data = await fetch(YOUTUBE_VIDEO_DETAILS_API+"&id="+id);
        const details = await data.json();
        
        setVideoDetails(details?.items[0]?.snippet)

    }

 
  return videoDetails?(

    <div className='flex h-[35%] w-[100%] m-8'>
        <div className='overflow-hidden rounded-lg w-[45%] h-[100%]'>
         <img className='h-[100%] w-[100%] rounded-lg object-cover' src={videoDetails.thumbnails.high.url} />
        </div>
        <div className='flex flex-col gap-2 p-2 w-[55%]'>
          <h1 className='text-white font-bold'>{videoDetails.title}</h1>
          <h2 className='text-[#AAAAAA] font-bold text-md'>{videoDetails.channelTitle}</h2> 
         <h3 className='text-[#AAAAAA] font-bold text-sm'>{videoDetails.description.slice(0,80)+"..."}</h3>  

        </div>

    </div>

  ):<h1>Loading...</h1>
}

export default SearchItem