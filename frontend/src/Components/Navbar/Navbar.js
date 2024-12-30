import React, { useState } from 'react'
import logo1 from './airbnb-icon.svg'
import logo2 from './airbnb.svg'
import { CiGlobe } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import property from '../Categories/PropertyType'

const Navbar = ({rooms}) => {

    const [options,setOptions] = useState(true)

  return (
    <div className='px-10 py-5'>
      <div className='flex gap-10 justify-between items-center'> 
        <div>
            <img className='min-w-[100px] w-[100px] cursor-pointer' src={logo2} alt='logo'/>
        </div>
        {!rooms&&<div className='flex gap-[35px] items-center'>
            <p className={`${!options?"text-[grey]":"text-black"} cursor-pointer ${options?"py-2 px-3 ":"py-2 px-3 hover:bg-[rgba(60,60,60,0.05)]"} rounded-xl`} onClick={()=>setOptions(true)}>Stays</p>
            <p className={`${options?"text-[grey]":"text-black"} cursor-pointer ${!options?"py-2 px-3 ":"py-2 px-3 hover:bg-[rgba(60,60,60,0.05)]"} rounded-xl`} onClick={()=>setOptions(false)}>Experiences</p>
        </div>}
        <div className='flex gap-6 items-center'>
            <p className='font-[600] text-[14px] hover:bg-[rgba(60,60,60,0.05)] cursor-pointer py-2 px-3 rounded-xl'>Airbnb your home</p>
            <p className='font-[600] text-[16px] hover:bg-[rgba(60,60,60,0.05)] cursor-pointer py-2 px-2 rounded-xl'><CiGlobe  size={20} /></p>
            <div>
                <p className='flex gap-3 border border-gray-300 p-3 rounded-[25px] cursor-pointer hover:shadow-md transition duration-300 ease' ><IoIosMenu size={20}/><span><IoPersonOutline size={20}/></span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
