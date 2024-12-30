package com.airbnb.service;

import com.airbnb.DTO.Response;
import com.airbnb.Repo.RoomRepo;
import com.airbnb.entity.RoomDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    @Autowired
    private RoomRepo roomRepo;

    public Response getAllRooms(Pageable pageable) {

        Response response = new Response();

        try{

            Page<RoomDetails> roomDetails = roomRepo.findAll(pageable);
            response.setRoomDetailsPage(roomDetails);
            response.setCode(200);
            response.setMessage("All rooms found");
            return response;

        }
        catch(Exception e){
            response.setCode(500);
            response.setMessage(e.getMessage());
            return response;
        }

    }

    public Response getRoomByCategory(Pageable pageable,String category) {
        Response response = new Response();

        try{

            if(category.equals("All") || category.isEmpty()) {

                Page<RoomDetails> roomDetails = roomRepo.findAll(pageable);
                response.setRoomDetailsPage(roomDetails);

            }

            else{
                Page<RoomDetails> roomDetails = roomRepo.findByPropertyTypeIsLike(pageable,category);
                response.setRoomDetailsPage(roomDetails);
            }
            response.setCode(200);
            response.setMessage("All rooms found");
            return response;

        }
        catch(Exception e){
            response.setCode(500);
            response.setMessage(e.getMessage());
            return response;
        }

    }

}
