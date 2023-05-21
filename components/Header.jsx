import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import {CgProfile} from 'react-icons/cg';
const Header = () => {
  const {user,isLoading}=useUser();
  
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-semibold'>Dashboard</h2>
        <h2 className='font-semibold '><span className='bg-purple-200 text-purple-800 rounded pt-1 pb-2 px-2 mr-2'><CgProfile className='inline-block'/></span>Welcome Back,<span className='text-indigo-600'> {user.nickname.toUpperCase()}</span></h2>
    </div>
  )
}

export default Header