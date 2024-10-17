package com.example.PracticeApi.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PracticeApi.entities.Store;

public interface StoreRepository extends JpaRepository<Store, Long> {

}
