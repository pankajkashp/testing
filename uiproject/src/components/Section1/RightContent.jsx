import React from 'react'
import RightCard from './RightCard';

const RightContent = () => {
  return (
    <div className='w-3/4 p-3 flex flex-nowrap overflow-x-auto  rounded-6xl'>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>
  )
}

export default RightContent;