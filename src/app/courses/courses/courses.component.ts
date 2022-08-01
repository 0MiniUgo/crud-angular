import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {

    this.courses = this.courseService.listCourses();
   }

  ngOnInit(): void {
  }

}
