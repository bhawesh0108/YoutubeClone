import React,{useState} from 'react'
import { YOUTUBE_COMMENT_REPLIES_API } from '../utils/constants';
import image from '../images/Bhawesh.jpeg'

const Comment = ({data}) => {
 
 const [replies,setReplies] = useState([]);
 const [showReplies,setShowReplies] = useState(false);

 const handleRepliesClick = async ()=>{

    if(replies.length==0){

        setShowReplies(true);

        const repliesData = await fetch(YOUTUBE_COMMENT_REPLIES_API+data.id)
        const repliesJson = await repliesData.json();
        setReplies(repliesJson.items);

    }
    else{
        setShowReplies(prev=>!prev)
    }

 }
  
  return (
    <div className="flex text-white gap-4 items-start">

        <div>
        <div className='rounded-full w-[40px] h-[40px] overflow-hidden'>
                <img className="object-cover rounded-full" src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="progileImg" />
             

        </div>

        </div>
        <div className='flex flex-col gap-2 items-start'>

        <h2 className='font-bold'>{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h2>
        <h2 className='text-sm'>{data?.snippet?.topLevelComment?.snippet?.textOriginal}</h2>
        {(data?.snippet?.totalReplyCount>0)? <button onClick={handleRepliesClick} className='text-[#3EA6FF] font-bold p-2 border border-[#272727] rounded-xl'>{data?.snippet?.totalReplyCount} Replies</button>:""}
        {showReplies && <div className='flex flex-col gap-4 ml-10'>
            {replies.map(reply=>{
                return (
                    <div key={reply.id} className='flex gap-4'>
                   <div className='rounded-full w-[25px] h-[25px] overflow-hidden'>
                    <img className="object-cover rounded-full" src={reply?.snippet?.authorProfileImageUrl} alt="progileImg" />
                      </div>
                      <div className='flex flex-col gap-2 items-start'>
                      <h3 className='font-bold'>{reply.snippet.authorDisplayName}</h3>
                      <h3 className='text-sm'>{reply.snippet.textOriginal}</h3>
                      </div>
  
                    </div>
                )
            })}
        </div>}

        </div>




       




    </div>
  )
}

export default Comment