import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-3'>
        <Button name='Music' />
        <Button name='Sports' />
        <Button name='LaLiga' />
        <Button name='Bollywood' />
        <Button name='Love' />
        <Button name='Javascript' />
        <Button name='Cricket' />
        <Button name='Romance' />
        <Button name='OOPS' />
        <Button name='Football' />
    </div>
  )
}

export default ButtonList