import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { ButtonIcon } from '../button/Button'

const Title = () => {
  return (
    <header className='flex justify-between items-center'>
    <h2>CheckTable</h2>
    <ButtonIcon
      blind='옵션보기'
      className='w-9 h-9 bg-gray-100'
    >
      <BsThreeDots />
    </ButtonIcon>
  </header>
  )
}

export default Title