import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div id="right" className='w-3/4 p-3 flex flex-nowrap overflow-x-auto  rounded-6xl'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent;