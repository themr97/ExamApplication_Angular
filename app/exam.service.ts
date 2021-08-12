import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { questions } from './models/questions';


@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/questions";
  getQuestions(){
    return this.http.get<questions[]>(this.url)
  }
}
