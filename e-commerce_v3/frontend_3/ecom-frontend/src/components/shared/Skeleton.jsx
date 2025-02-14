import React from 'react'

const Skeleton = () => {
  return (
    <div role ="status" className='space-y-2.5 animate-pulse w-full'>
            <div className='flex items-center w-full'>
                    <div className='h-2.3 bg-gray-200 rounded-full dark:bg-gray-700 w-32' />
                    <div className='h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24' />
                    <div className='h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 flex-1' />
            </div>
            
    </div>
  );
};

export default Skeleton;