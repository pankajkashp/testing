import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-10  ">
        <h2 className="text-2xl font-bold mt-4 bg-white rounded-full items-center flex justify-center h-12 w-12 text-gray-400">{props.id + 1}</h2>
        <div>
          <p className="text-xl text-white mb-10 tracking-wider">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            labore.
          </p>
          <div className="flex  items-center">
            <button style={{background: props.color}}className=" text-white py-2 px-4 rounded-xl">{props.tag}</button>
            <button style={{background: props.color}}className=" text-white py-2 px-4 rounded-xl ml-2 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent