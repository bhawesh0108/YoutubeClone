import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams} from 'react-router-dom'
import { closeSideNav } from '../utils/appSlice'
import { YOUTUBE_COMMENT_REPLIES_API, YOUTUBE_COMMENTS_API } from '../utils/constants'
import Comment from "./Comment"

const WatchPage = () => {

const dispatch = useDispatch()
const [searchParam]  = useSearchParams();
const [comments,setComments] = useState([])

  useEffect(()=>{

     dispatch(closeSideNav())
     fetchVideoComments()

  },[])



  const fetchVideoComments = async ()=>{
    const data = await fetch(YOUTUBE_COMMENTS_API+searchParam.get('v'));
    const commentsJson = await data.json();

    setComments(commentsJson.items);

    console.log(commentsJson);

    const data2 = await fetch(YOUTUBE_COMMENT_REPLIES_API+commentsJson.items[0].id);
    const replies = await data2.json();

    console.log(replies);


  }

  return (
    <div className='px-5 flex flex-col gap-4 w-[100%] h-[100vh] ml-6'>
 <iframe
  className="rounded-lg w-[70%] h-[70%]"
  src={`https://www.youtube.com/embed/${searchParam.get('v')}`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
<div className='flex flex-col mt-4 w-[60%] h-[30%]'>
            <h2 className='text-white font-bold text-xl'>Comments</h2>
            <div className='mt-6 flex flex-col gap-4'>
                {comments.map((comment)=>(
                    <Comment key={comment.id} data={comment} />
                ))}
            </div>


</div>
    </div>
  )
}

export default WatchPage