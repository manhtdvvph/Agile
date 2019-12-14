package com.example.demo.DTO;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "type")
public class Type {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;
    @Column(name = "status")
    private String status;
//    @OneToMany()
//    private List<Course> listCourse;

    public Type() {
    }

//    public List<Course> getListCourse() {
//        return listCourse;
//    }
//
//    public void setListCourse(List<Course> listCourse) {
//        this.listCourse = listCourse;
//    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
