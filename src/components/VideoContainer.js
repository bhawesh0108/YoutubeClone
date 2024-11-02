import React,{useEffect,useState} from 'react'
import { YOUTUBE_POPULAR_VIDEOS_API } from '../utils/constants';
import Video from './Video'
import {Link} from "react-router-dom"

const VideoContainer = () => {

  const [videos,setVideos] = useState(null);

  useEffect(()=>{

    fetchVideos();

  },[])

  const fetchVideos = async ()=>{

    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    console.log(json)

    setVideos(json.items)
 

  }
  if(videos==null)
    return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap gap-4 ml-4 mt-4'>
        {videos.map(videoItem=><Link key={videoItem.id}  className='h-[5%] w-[32%]' to={"/watch?v="+videoItem.id}><Video id={videoItem.id} snippet={videoItem.snippet} statistics={videoItem.statistics}/></Link>)}
     
    </div>
  )
}

export default VideoContainer