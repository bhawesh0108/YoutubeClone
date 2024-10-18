import React from 'react'
import image from '../images/Bhawesh.jpeg'
import {useDispatch} from 'react-redux'
import { toggleSideNav } from '../utils/appSlice'
const Header = () => {

  const dispatch = useDispatch();

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
            <input className='bg-[#272727] p-4 w-[45%] h-[80%] border border-[#303030] rounded-l-full' placeholder='Search' type="text" />
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