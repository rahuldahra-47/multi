import React from 'react'
import Image from "next/image"

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-gradient-to-r from-[#4568dc]/20 to-[#b06ab3]/20 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>31</p>
                <p className='text-gray-600'>Attendance</p>
            </div>
            <p className=' flex justify-center items-center p-2 rounded-lg'>
            <Image
                alt="Benefits"
                src="/assets/smily_gif.gif"
                width={60}
                height={64}
                className="rounded hover:h-12 hover:w-14"
              />
            </p>
            
        </div>
        <div className='lg:col-span-2 col-span-1 bg-gradient-to-r from-[#4568dc]/20 to-[#b06ab3]/20 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>7</p>
                <p className='text-gray-600'>Books Issued</p>
            </div>
            <p className=' flex justify-center items-center p-2 rounded-lg'>
            <Image
                alt="Benefits"
                src="/assets/smily_gif.gif"
                width={60}
                height={64}
                className="rounded hover:h-12 hover:w-14"
              />
            </p>
        </div>
        <div className='bg-red-200 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1000/-</p>
                <p className='text-gray-600'>Fine</p>
            </div>
            <p className=' flex justify-center items-center p-2 rounded-lg'>
            <Image
                alt="Benefits"
                src="/assets/sad_gif.gif"
                width={66}
                height={70}
                className="rounded hover:h-10 hover:w-14"
              />
            </p>
        </div>
    </div>
  )
}

export default TopCards
