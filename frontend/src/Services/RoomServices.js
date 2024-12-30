import axios from "axios"

export default class RoomServices{


    static BASE_URL = "http://172.20.10.2:8181"

    static getHeader(){
        const token = localStorage.getItem('token');
        return{
          Authorization:`Bearer ${token}`,
          "Content-Type":"application/json"
        };
      }

    static async getAllRoomsByCategory(num,size,category){

        const response = await axios.get(`${this.BASE_URL}/all-rooms/get-by-category/${num}/${size}/${category}`)
        return response.data

    }

    static async getEachRoomDetails1(roomId){

      const response = await axios.get(`${this.BASE_URL}/each-room/get-details/${roomId}`)
      return response.data

    }

}