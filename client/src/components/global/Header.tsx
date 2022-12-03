import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className='h-[50px] bg-slate-200 flex items-center w-full space-x-5'>
        <div className='flex ml-10 space-x-10 items-center w-fit'>
        <h1 className='text-2xl'>BlogDev</h1>
        <Link to={'/login'} className='font-semibold text-gray-400 hover:text-black'>Login</Link>
        <Link to={'/register'} className='font-semibold text-gray-400 hover:text-black'>Register</Link>
        <button 
        onClick={() => setIsDropdownOpen(prev => !prev)}
        className='font-semibold text-gray-400 hover:text-black'>Dropdown</button>
        </div>
        <Search/>

        {isDropdownOpen && (
              <div className="absolute shadow-lg top-[48px] left-[240px] w-48 z-20 flex flex-col bg-white/80 border border-gray-200">
                <button className='hover:bg-slate-300 cursor-pointer pb-2' onClick={()=> {}}>Action</button>
                <button className='hover:bg-slate-300 cursor-pointer pb-2' onClick={()=> {}}>Action</button>
                <button className='hover:bg-slate-300 cursor-pointer pb-2' onClick={()=> {}}>Action</button>
              </div>
            )}
    </header>
  )
}

export default Header