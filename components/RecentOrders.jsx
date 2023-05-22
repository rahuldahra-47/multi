import React from 'react';
import { data } from '../data/data.js';
import { TbBooks } from 'react-icons/tb';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-gradient-to-r from-[#4568dc]/30 to-[#b06ab3] overflow-scroll scrollbar-hide'>
      <h1 className='font-bold text-slate-800 text-xl'>Books Issued</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-200 hover:cursor-default hover:p-[0.55rem] rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-200 rounded-lg p-3'>
              <TbBooks className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{order.title}</p>
              <p className='text-gray-400 text-sm'>{order.author}</p>
            </div>
            <p className='lg:flex min-[200px]:hidden  lg:absolute right-6 text-gray-600 text-sm'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
