package com.example.demo.Controller;

import com.example.demo.DTO.ApiResponse;
import com.example.demo.DTO.Course;
import com.example.demo.DTO.User;
import com.example.demo.Service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/course")
@CrossOrigin("http://localhost:4200")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/getAll")
    public ApiResponse getALl() {
        return ApiResponse.build(HttpServletResponse.SC_OK, true, "", courseService.getALl());
    }

}
