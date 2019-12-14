import { CourseService } from './../../service/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/modal/course.modal';

@Component({
  selector: 'app-onlinecourse',
  templateUrl: './onlinecourse.component.html',
  styleUrls: ['./onlinecourse.component.scss']
})
export class OnlinecourseComponent implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.courseService.getAll().subscribe(data => {
      this.courses = data;
      console.log(data);
    });


  }

}
