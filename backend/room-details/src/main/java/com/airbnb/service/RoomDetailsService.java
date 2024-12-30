package com.airbnb.service;

import com.airbnb.dto.Response;
import com.airbnb.entity.RoomDetails;
import com.airbnb.repo.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomDetailsService {

    @Autowired
    private RoomRepo roomRepo;

    public Response getEachRoomDetails(String roomId) {

        Response r = new Response();

        try{

            if(roomId.isBlank()){

                r.setMessage("Room id is blank");
                r.setStatusCode(400);

            }
            else{
                RoomDetails rd = roomRepo.findById(roomId).orElseThrow(()-> new IllegalArgumentException("Room not found"));
                r.setRoomDetails(rd);
                r.setStatusCode(200);
                r.setMessage("Success");
            }
            return r;

        }
        catch(Exception e){

            r.setMessage(e.getMessage());
            r.setStatusCode(500);
            return r;

        }

    }

}
