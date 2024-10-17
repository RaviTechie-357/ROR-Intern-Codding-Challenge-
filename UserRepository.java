package com.example.PracticeApi.repos;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.PracticeApi.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}


