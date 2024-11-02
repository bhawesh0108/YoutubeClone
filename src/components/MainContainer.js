import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import {useSelector} from 'react-redux'

const MainContainer = () => {
  const showSideNav = useSelector((store)=>store.appSlice.showSideNav)
  return (
    <div className={`flex flex-col mx-3 ${showSideNav?"w-[80vw]":"w-[100vw]"}`}>
    <ButtonList />
    <VideoContainer/>
    </div>
  )
}

export default MainContainer