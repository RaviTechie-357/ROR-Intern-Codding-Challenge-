package com.example.PracticeApi.controller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.PracticeApi.entities.Store;
import com.example.PracticeApi.entities.User;
import com.example.PracticeApi.repos.RatingRepository;
import com.example.PracticeApi.repos.StoreRepository;
import com.example.PracticeApi.repos.UserRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping("/dashboard")
    public ResponseEntity<?> getAdminDashboard() {
        Map<String, Object> dashboardData = new HashMap<>();
        dashboardData.put("totalUsers", userRepository.count());
        dashboardData.put("totalStores", storeRepository.count());
        dashboardData.put("totalRatings", ratingRepository.count());
        return ResponseEntity.ok(dashboardData);
    }

    @PostMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("/addStore")
    public ResponseEntity<Store> addStore(@RequestBody Store store) {
        return ResponseEntity.ok(storeRepository.save(store));
    }
}


