package com.example.demo.Repo;

import com.example.demo.DTO.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User getByCode(String code);
    User getByUsername(String username);
}
