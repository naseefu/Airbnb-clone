import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearchComponent from '../Navbar/SearchComponent'
import RoomServices from '../../Services/RoomServices'
import { IoStarSharp } from 'react-icons/io5'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import property from '../Categories/PropertyType'
import './home.css'
import filter from './filter.svg'
import { CiHeart } from "react-icons/ci";

const Home = () => {

    const [num,setNum] = useState(0)
    const [size,setSize] = useState(60)
    const [rooms,setRooms] = useState([])
    const navigate = useNavigate()

    const {categories} = useParams()

    useEffect(()=>{

        const fetchAllRooms=async()=>{
            try{
                
                const response = await RoomServices.getAllRoomsByCategory(num,size,categories===undefined?"All":categories)
                setRooms(response.roomDetailsPage.content)

            }
            catch(err){
                console.log(err.response?.data?.message || "An error occured")
            }
        }
        fetchAllRooms();

    },[num,size,categories])

  return (
    <div className=''>
      <div>
        <Navbar/>
      </div>
      <div className='border-b pb-6 border-gray-100'>
        <SearchComponent/>
      </div>
      <div style={{gridTemplateColumns:'6fr 1fr'}} className='grid items-start gap-6 justify-between px-10 py-8'>
      <div className='flex gap-[50px] overflow-x-auto scrollbar-hide types'>
        {property.map((p,index)=>(
          <NavLink to={p.name==="All"?"/":"/"+p.name} activeclassname="active" className='pb-2 flex flex-col items-center text-[13px] gap-2 max-w-[fit-content]'>
            <img className='h-[25px] w-[20px]' src={p.link} alt='icon'/>
            <p className='font-[500]'>{p.name}</p>
          </NavLink>
        ))}
      </div>
      <div>
        <p className='flex gap-2 items-center border border-gray-200 p-3 px-4 rounded-lg text-[13px] w-[fit-content]'><span><img className='h-[20px] w-[15px]' src={filter} alt='filter'/></span>Filters</p>
      </div>
      </div>
      <div className='flex flex-wrap md:grid xl:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-6 md:grid-cols-3 gap-5 justify-start items-left px-1 md:px-5 pb-20'>
        {rooms.length>0&&rooms.map((r,index)=>(
            <div id={index} className='relative cursor-pointer' onClick={()=>navigate(`/rooms/${r.id}`)}>
              <p className='absolute top-[5%] right-[5%] text-white text-[25px] font-bold'><CiHeart/></p>
                <div>
                    <img className='h-[350px] md:h-[300px] w-[100%] md:w-[300px] object-cover rounded-xl' src={r.picture_url} alt='pic' onError={(e)=>(
                        e.target.onerror=null,
                        e.target.src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
                    )}/>
                </div>
                <div className='mt-2 flex justify-between gap-2 w-[100%]'>
                    <div className='text-left w-[90%]'>
                        <p className='text-[14px] font-[500]' style={{fontFamily:'inherit'}}>{r.city}, {r.country}</p>
                        <p className='text-[grey] text-[13px]'>{r.name}</p>
                        <p className='text-[13px] mt-1 font-[500]'>{r.price} night</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-[13px]'>{r.reviews_per_month>0&&<><IoStarSharp /><span>{r.reviews_per_month}</span></>}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Home
