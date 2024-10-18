import React,{useEffect,useState} from 'react'
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants';
import Video from './Video'

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  useEffect(()=>{

    fetchVideos();

  },[])

  const fetchVideos = async ()=>{

    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items)
 

  }
  return (
    <div className='flex flex-wrap gap-12 ml-4 mt-4'>
        {videos.map(videoItem=><Video snippet={videoItem.snippet} statistics={videoItem.statistics}/>)}
     
    </div>
  )
}

export default VideoContainer