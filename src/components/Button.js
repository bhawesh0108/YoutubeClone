import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({name}) => {
  return (
        <Link to={"/results?search_query="+name}  className='p-2 px-4 m-2 rounded-md text-white bg-[#272727] hover:bg-white hover:text-[#272727]'>
          {name}
        </Link>
   
  )
}

export default Button