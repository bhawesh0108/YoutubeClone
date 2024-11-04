import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-3'>
        <Button name='Music' />
        <Button name='Sports' />
        <Button name='LaLiga' />
        <Button name='Bollywood' />
        <Button name='Movies' />
        <Button name='Javascript' />
        <Button name='Aaj Tak' />
        <Button name='Shakira' />
        <Button name='Arijit' />
        <Button name='News' />
    </div>
  )
}

export default ButtonList