import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10'>
        <button className='bg-black text-white px-4 py-2 uppercase rounded-full'>target audience</button>
        <button className=' text-gray-500 uppercase px-4 py-2 rounded'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar;