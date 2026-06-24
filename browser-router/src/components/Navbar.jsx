import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-4 bg-gray-600 text-white font-bold text-xl'>
        <h1>Pankaj</h1>
        <div className='flex justify-between items-center gap-4'>
            <Link to="/About">About</Link>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Product">Product</Link>
        </div>
    </div>
  )
}

export default Navbar