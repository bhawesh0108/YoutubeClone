import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams} from 'react-router-dom'
import { closeSideNav } from '../utils/appSlice'

const WatchPage = () => {

const dispatch = useDispatch()

  useEffect(()=>{

     dispatch(closeSideNav())

  },[])

  const [searchParam]  = useSearchParams();

  return (
    <div className='px-5'>
        <iframe className='rounded-lg' width="1100" height="550" src={"https://www.youtube.com/embed/"+ searchParam.get('v') } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
  )
}

export default WatchPage