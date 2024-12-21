'use client';
import React, { useState } from 'react';
import logo from '../../public/logo.png';
import { SignedIn,SignedOut,UserButton } from '@clerk/nextjs';
import { CiSearch, CiMenuBurger } from 'react-icons/ci';
import Image from 'next/image';

function NavBar() {
  const [side, setSide] = useState(false);

  const handleMenu = () => {
    setSide(!side);
  };

  const closeSidebar = () => {
    setSide(false);
  };

  return (
    <div className='relative'>
      {/* Navbar */}
      <div className='bg-slate-300 shadow-md shadow-blue-300 items-center'>
        <nav className='flex justify-between mx-5 md:mx-10 items-center'>
          <div className="flex gap-5 items-center">
            <p className='font-bold text-lg md:text-xl text-blue-500'>Modern Real Estate</p>
            <Image src={logo} className='w-16 h-16 md:w-20 md:h-20 lg:w-34 lg:h-34 rounded-full mr-[30px]' alt="Logo" />
          </div>
          <div className="flex items-center bg-white rounded-2xl p-1 pr-2">
            <input className='p-2 focus:outline-none w-40 md:w-60 lg:w-80' placeholder='Type to Search' />
            <CiSearch className='text-xl md:text-2xl mg:text-4xl' />
          </div>
          <CiMenuBurger className='sm:hidden ml-4 hover:cursor-pointer' size={30} onClick={handleMenu} />
          <ul className='hidden sm:flex sm:gap-10 text-blue-500 font-bold text-xl'>
            <li className='hover:border-b-2 border-red-600 hover:cursor-pointer' onClick={()=>{window.location.href='/home'}}>Home</li>
            <li className='hover:border-b-2 border-red-600 hover:cursor-pointer' onClick={()=>{window.location.href='/about'}}>About</li>
            <SignedIn>
              <UserButton/>
            </SignedIn>
            <SignedOut>
  
          <li className='hover:border-b-2 border-red-600 hover:cursor-pointer' onClick={()=>{window.location.href='/sign-in'}}>Login</li>
            </SignedOut>
          </ul>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen bg-green-300 z-20 w-40 p-5 transform transition-transform duration-300 ${
          side ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul>
          <li className='hover:underline p-4 hover:cursor-pointer text-xl' onClick={()=>{window.location.href='/home'}}>Home</li>
          <li className='hover:underline p-4 hover:cursor-pointer text-xl ' onClick={()=>{window.location.href='/about'}}>About</li>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
          <li className='hover:underline p-4 hover:cursor-pointer text-xl' onClick={()=>{window.location.href='/sign-in'}}>Login</li>
          </SignedOut>
        </ul>
        
      </div>

      {/* Overlay for blur effect */}
      {side && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30  "
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
}

export default NavBar;