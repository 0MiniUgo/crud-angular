import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listCourses(): Course[]{
    return [
      {_id: '1', name: 'Angular', category: 'front-end'},
      {_id: '2', name: 'Spring', category: 'back-end'}
    ];
  }
}