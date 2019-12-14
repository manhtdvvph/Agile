package com.example.demo.Service;

import com.example.demo.DTO.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    void save(User user);
    User getByUserCode(String userCode);
}
