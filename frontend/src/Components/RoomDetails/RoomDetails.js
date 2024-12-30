import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import RoomServices from '../../Services/RoomServices'
import { CiHeart } from 'react-icons/ci'
import { IoShareOutline } from "react-icons/io5";
import { LiaStarSolid } from 'react-icons/lia'

const RoomDetails = () => {

    const {id} = useParams()
    const [roomDetails,setRoomDetails] = useState()
    const [amenity,setAmenity] = useState([])

    useEffect(()=>{

      const fetchEachRoomDetails1=async()=>{

        try{  

          const response = await RoomServices.getEachRoomDetails1(id)
          console.log(response.roomDetails.amenities.replace("{","").replace("}","").replaceAll(`"`,"").split(","))
          setAmenity(response.roomDetails.amenities.replace("{","[").replace("}","]").replaceAll(`"`,"").split(","))
          setRoomDetails(response.roomDetails)

        }
        catch(err){
          console.log(err.response?.data?.message || "An error occured")
        }

      }

      fetchEachRoomDetails1();

    },[id])


  return (
    <div className='pb-10'>
      <div className='border-b border-gray-100 mb-5'>
        <div className='max-w-[1280px] mx-auto'>
        <Navbar rooms={true}/>
        </div>
      </div>
      {roomDetails&&<div className='max-w-[1200px] mx-auto'>
          <div>
            <div className='flex justify-between items-center mb-6'>
              <div>
                <h1 className='text-[30px] font-[500]'>{roomDetails.name}</h1>
              </div>
              <div className='flex items-center gap-6'>
                <p className='flex items-center gap-2 underline cursor-pointer'><span><IoShareOutline/></span>Share</p>
                <p className='flex items-center gap-2 underline cursor-pointer'><span><CiHeart/></span>Save</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <div>
                {roomDetails.picture_url&&<img src={roomDetails.picture_url} className='h-[410px] object-cover' 
                style={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}} alt='image1'/>}
              </div>
              <div className='grid grid-cols-2 gap-2'>
                {roomDetails.thumbnail_url&&<img src={roomDetails.thumbnail_url} className='h-[200px] object-cover' alt='imag2'/>}
                {roomDetails.medium_url&&<img src={roomDetails.medium_url} className='h-[200px] object-cover' alt='imag2'/>}
                {roomDetails.xl_picture_url&&<img src={roomDetails.xl_picture_url} className='h-[200px] object-cover' alt='imag2'/>}
              </div>
            </div>
            <div>
              <div>
                <div className='text-left mt-8 border-b pb-6'>
                  <h1 className='text-[20px] font-[600]'>{roomDetails.property_type} stay in {roomDetails.city}, {roomDetails.country}</h1>
                  <p className='text-[14px] text-gray-800'>{roomDetails.accommodates&&roomDetails.accommodates} Guests · {roomDetails.bedrooms&&roomDetails.bedrooms} Bedrooms · {roomDetails.beds&&roomDetails.beds} Beds · {roomDetails.bathrooms&&roomDetails.bathrooms} Bathrooms </p>
                  <p className='flex items-center gap-1 text-[15px] font-[500]'><span><LiaStarSolid/></span>{roomDetails.reviews_per_month}</p>
                </div>
                <div className='mt-8 pb-6 border-b text-left flex gap-5'>
                  <div className=''>
                    <img src={roomDetails.host_picture_url} className='h-[50px] w-[50px] object-cover' alt='icon' />
                  </div>
                  <div>
                    <p className='text-[] font-[600]'>Hosted by {roomDetails.host_name}</p>
                    <p className='text-gray-800 text-[14px]'>5 years hosting</p>
                  </div>
                </div>
                <div className='mt-8 text-left pb-6 border-b'>
                  <p className='text-gray-900'>{roomDetails.description}</p>
                </div>
                <div className='mt-8 pb-6 border-b text-left '>
                  <p className='text-[20px] font-[600]'>What this place offers</p>
                  <div className='grid grid-cols-3 gap-4 mt-6'>
                  {amenity&&amenity.map((a,index)=>(
                    <div key={index}>
                      <p>{a.replace("[","").replace("]","")}</p>
                    </div>
                  ))}</div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

      </div>}
      {/* <div>
        <iframe src='https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s47.6362890384,-122.3710252'/>
      </div> */}
    </div>
  )
}

export default RoomDetails
