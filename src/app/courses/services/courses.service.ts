import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  listCourses(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(2000),
      tap(courses => console.log(courses))
    );
  }

  loadById(id: string){
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  saveCourse(course: Partial<Course>){
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }
}
