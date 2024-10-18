import React from 'react'

const Button = ({name}) => {
  return (
        <button className='p-2 px-4 m-2 rounded-md text-white bg-[#272727] hover:bg-white hover:text-[#272727]'>
          {name}
        </button>
   
  )
}

export default Button