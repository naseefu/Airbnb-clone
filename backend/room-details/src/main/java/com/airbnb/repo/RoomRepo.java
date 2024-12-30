package com.airbnb.repo;

import com.airbnb.entity.RoomDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepo extends MongoRepository<RoomDetails,String> {
}
