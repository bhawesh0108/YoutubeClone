import React,{useState,useEffect} from 'react'
import image from '../images/Bhawesh.jpeg'
import {useDispatch,useSelector} from 'react-redux'
import { toggleSideNav } from '../utils/appSlice'
import { YOUTUBE_SEARCH_SUGGESTIONS_API, YOUTUBE_SEARCH_VIDEOS_API } from '../utils/constants'
import { setSuggestionsMemo } from '../utils/suggestionsSlice'
import { Link } from 'react-router-dom'

const Header = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const suggestionsMemo = useSelector((store)=>store.suggestions)

  useEffect(()=>{
    
    let interval = setTimeout(()=>fetchSuggestions(),200);

    return ()=>{
      clearTimeout(interval);
    }

  },[searchQuery])

  const fetchSuggestions = async ()=>{

    if(suggestionsMemo[searchQuery])
    {
 
      setSuggestions(suggestionsMemo[searchQuery]);
    }
    else{
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(setSuggestionsMemo({
        [searchQuery]:json[1]
      }))

    }


   

  }

  const handleSearchQuery = (e)=>{

    setSearchQuery(e.target.value);

  }

  const handleInputBlur = ()=>{
    setTimeout(()=>{
       setShowSuggestions(false);
    },200)
  }




  const handleBurgerIconClick = ()=>{
  
    dispatch(toggleSideNav());

  }
  return (
    <div className='flex items-center  py-2 px-4 mb-2 bg-black h-[8vh] border-b-1 shadow-white'>

        <div className='h-full w-[15%] flex items-center gap-2'>
            <img onClick={handleBurgerIconClick} className='h-8 object-cover' src="https://i.pinimg.com/1200x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg" alt="handBurgerMenu"/>
            <img className='h-10 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xcjbJz37_X3Veq3YNbi_6i2ZBPY0phbgvw&s" alt="YoutubeIcon"/>
        </div>

        <div className= "w-[90%] h-[100%] flex justify-center items-center">
          <div className='w-[45%] h-[80%] flex flex-col relative'>
          <input  onFocus={()=>setShowSuggestions(true)} onBlur={handleInputBlur}  value={searchQuery} onChange={handleSearchQuery} className='bg-[#272727] p-4 w-[100%] h-[100%] border border-[#303030] rounded-l-full text-white' placeholder='Search' type="text" />
           { showSuggestions && <div  className='absolute top-10 w-[100%] rounded-lg overflow-hidden'>
              {suggestions.map((item,index)=>(

                <Link to={"/results?search_query="+item}  className='text-white font-semibold bg-[#303030] hover:bg-[#272727] w-[100%] py-2 px-4 flex flex-col' key={index} >
                  {item} 
                </Link> 
              )
               

              )}

            </div>}

          </div>

            <button className='bg-[#272727] p-2 border border-[#303030] rounded-r-full h-[80%] w-[7%]'>🔍</button>

        </div>

        <div className='w-[10%] flex justify-end items-center h-full'>
            <div className='rounded-full w-[40px] h-[40px] overflow-hidden'>
                <img className="object-cover rounded-full" src={image} alt="progileImg" />
            </div>
         
        </div>

    </div>
  )
}

export default Header