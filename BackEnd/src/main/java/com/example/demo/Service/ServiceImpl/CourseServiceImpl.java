package com.example.demo.Service.ServiceImpl;

import com.example.demo.DTO.Course;
import com.example.demo.Repo.CourseRepo;
import com.example.demo.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public List<Course> getALl() {
        return courseRepo.findAll();
    }
}
