import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchComponent = () => {
  return (
    <div>
      <div className='flex items-center justify-center my-2 gap-5 text-left border w-[fit-content] mx-auto py-2 px-3 pl-8 rounded-[55px] shadow-md'>
        <div className='cursor-pointer border-r pr-[80px] pl-0'>
            <p className='text-[14px]'>Where</p>
            <p className='text-[grey] text-[14px]'>Search desinations</p>
        </div>
        <div className='cursor-pointer border-r pr-[80px] pl-8'>
            <p className='text-[14px]'>Date</p>
            <p className='text-[grey] text-[14px]'>Add dates</p>
        </div>
        <div className='cursor-pointer pl-8 flex gap-20 items-center'>
            <div>
            <p className='text-[14px]'>Who</p>
            <p className='text-[grey] text-[14px]'>Add guests</p>
            </div>
            <div>
            <p className='bg-red-600 text-white p-4 rounded-[30px]'><IoIosSearch/></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
