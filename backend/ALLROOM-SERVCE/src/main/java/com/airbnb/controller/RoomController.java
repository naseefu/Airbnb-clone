package com.airbnb.controller;

import com.airbnb.DTO.Response;
import com.airbnb.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/all-rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping("/get-all/{num}/{size}")
    public ResponseEntity<Response> allRooms(@PathVariable int num, @PathVariable int size) {

        Pageable p = PageRequest.of(num, size);
        Response r = roomService.getAllRooms(p);
        return ResponseEntity.status(r.getCode()).body(r);

    }

    @GetMapping("/get-by-category/{num}/{size}/{category}")
    public ResponseEntity<Response> allRoomsByCategory(@PathVariable int num, @PathVariable int size, @PathVariable String category) {

        Pageable p = PageRequest.of(num, size);
        Response r = roomService.getRoomByCategory(p,category);
        return ResponseEntity.status(r.getCode()).body(r);

    }

}
