package com.airbnb.DTO;

import com.airbnb.entity.RoomDetails;
import lombok.*;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
public class Response {

    private String message;
    private int code;
    private List<RoomDetails> roomDetails;
    private Page<RoomDetails> roomDetailsPage;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public List<RoomDetails> getRoomDetails() {
        return roomDetails;
    }

    public void setRoomDetails(List<RoomDetails> roomDetails) {
        this.roomDetails = roomDetails;
    }

    public Page<RoomDetails> getRoomDetailsPage() {
        return roomDetailsPage;
    }

    public void setRoomDetailsPage(Page<RoomDetails> roomDetailsPage) {
        this.roomDetailsPage = roomDetailsPage;
    }
}
