import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useSearchParams} from 'react-router-dom'
import { closeSideNav } from '../utils/appSlice'
import { YOUTUBE_COMMENT_REPLIES_API, YOUTUBE_COMMENTS_API } from '../utils/constants'
import Comment from "./Comment"
import LiveChatItem from './LiveChatItem'
import { addMessage } from '../utils/liveChatSlice'
import { getRandomName,generateRandomChatMessage } from '../utils/helper'


const WatchPage = () => {

const dispatch = useDispatch()
const [searchParam]  = useSearchParams();
const [comments,setComments] = useState([])
const [liveComment,setLiveComment] = useState("");
const liveChatMessages = useSelector((store)=>store.liveChat.messages)
const sideNav = useSelector((store)=>store.appSlice.showSideNav)

  useEffect(()=>{
     
     dispatch(closeSideNav())
     fetchVideoComments()

     let interval=setInterval(()=>{

        let randomName = getRandomName();
        let chatComment = generateRandomChatMessage();

      dispatch(addMessage({
        name:randomName,
        comment:chatComment
      }))

     },1500)

     return ()=>{
        clearInterval(interval);
     }

  },[])


  const fetchVideoComments = async ()=>{
    const data = await fetch(YOUTUBE_COMMENTS_API+searchParam.get('v'));
    const commentsJson = await data.json();

    setComments(commentsJson.items);

  }

  const handleLiveChatSubmit = (e)=>{
    e.preventDefault()

    dispatch(addMessage({
        name:"Bhawesh",
        comment:liveComment
    }))

    setLiveComment("");



  }

  return (
    <div className='px-5 flex gap-2 w-[100%] h-[100vh] ml-6'>
     <div className='flex flex-col gap-4 w-[70%] h-[100%]'>      
 <iframe
  className="rounded-lg w-[95%] h-[65%]"
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
<div className='flex flex-col h-[70vh] w-[30%] gap-2'>
<div className='h-[90%] rounded-lg bg-gray-600 text-white overflow-y-auto flex flex-col-reverse'>

  {liveChatMessages.map((message)=> <LiveChatItem name={message.name} comment={message.comment} />)}

</div>
<form onSubmit={handleLiveChatSubmit} className= 'text-black h-[10%] w-[100%]'>
    <input value={liveComment} onChange={(e)=>setLiveComment(e.target.value)} className='p-2 border rounded-lg w-[75%]' type="text" placeholder='Type...' />
    <input className= "font-bold p-2 w-[20%] bg-green-200 rounded-lg ml-2" type="submit" value="Chat" />
</form>
</div>

    </div>
  )
}

export default WatchPage