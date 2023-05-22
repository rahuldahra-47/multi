import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';

import {AiOutlinePoweroff} from 'react-icons/ai'
import { TbBooks } from 'react-icons/tb';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen bg-gradient-to-bl from-white  to-slate-600/70 p-4 bg-border-r-[1px] flex flex-col justify-between shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-slate-800  p-3 rounded-lg inline-block'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke='rgb(53, 138, 237)'
                className="mx-auto  h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-900 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-900 hover:text-white active:bg-gray-900 active:text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/Customers'>
            <div className='bg-gray-100 hover:bg-gray-900 hover:text-white active:bg-gray-900 active:text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/Orders'>
            <div className='bg-gray-100 hover:bg-gray-900 hover:text-white active:bg-gray-900 active:text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <TbBooks size={20} />
            </div>
          </Link>
          </div>
          <Link href='/api/auth/logout'>
            <div className=' cursor-pointer my-4 p-3 hover:text-red-600 inline-block'>
              <AiOutlinePoweroff size={20} />
            </div>
          </Link>
        </div>
      
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
