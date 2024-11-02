import React,{useEffect,useState,useRef} from 'react'
import { useSearchParams,Link} from 'react-router-dom'
import { YOUTUBE_POPULAR_VIDEOS_API, YOUTUBE_SEARCH_VIDEOS_API, YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants';
import SearchItem from './SearchItem';



const Results = () => {

  const [searchParams] = useSearchParams();
  const [searchResults,setSearchResults] = useState(null);
  useEffect(()=>{

    fetchSearchResults()

  },[searchParams])

  const fetchSearchResults = async ()=>{

    const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API+searchParams.get('search_query'));
    const result = await data.json();
    setSearchResults(result.items);

  }

  if(searchResults==null)
    return <h1>Loading...</h1>

  return  (
    <div className='mx-4 h-[100vh]'>

    {searchResults.map((item)=><Link key={item.id.videoId} to={"/watch?v="+item.id.videoId}><SearchItem  id={item.id.videoId} /></Link>)}

    </div>
  )
}

export default Results