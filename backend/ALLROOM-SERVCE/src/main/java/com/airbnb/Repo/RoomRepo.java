package com.airbnb.Repo;

import com.airbnb.entity.RoomDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepo extends MongoRepository<RoomDetails,String> {
    Page<RoomDetails> findByPropertyTypeIsLike(Pageable pageable, String category);
}
