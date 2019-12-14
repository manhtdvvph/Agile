package com.example.demo.DTO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "detail")
public class Detail {
    @Id
    @Column(name = "id")
    private Integer id;
    @Column(name = "id_user_course")
    private Integer id_user_course;
    @Column(name = "course_id")
    private Integer course_id;
    @Column(name = "price")
    private Integer price;
    @Column(name = "status")
    private String status;

    public Detail() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_user_course() {
        return id_user_course;
    }

    public void setId_user_course(Integer id_user_course) {
        this.id_user_course = id_user_course;
    }

    public Integer getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Integer course_id) {
        this.course_id = course_id;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
