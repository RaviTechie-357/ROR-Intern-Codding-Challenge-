package com.example.PracticeApi.repos;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.PracticeApi.entities.Rating;
import com.example.PracticeApi.entities.Store;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> findByStore(Store store);
}


