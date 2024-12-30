package com.airbnb.controller;

import com.airbnb.dto.Response;
import com.airbnb.service.RoomDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/each-room")
public class RoomController {

    @Autowired
    private RoomDetailsService roomDetailsService;

    @GetMapping("/get-details/{roomId}")
    public ResponseEntity<Response> getEachRoomDetails(@PathVariable String roomId) {

        Response r = roomDetailsService.getEachRoomDetails(roomId);
        return ResponseEntity.status(r.getStatusCode()).body(r);

    }

}
