import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { questions } from '../models/questions';
import { options } from '../models/options'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ExamService]
})
export class ExamComponent implements OnInit {

  mode='exam';
  ans=0;
  constructor(private rs: ExamService) { }

  questions:questions[] = [];


  ngOnInit(): void {
    this.loadExam();
  }

  loadExam(){
    this.rs.getQuestions().subscribe
    (
      (response)=>
      {
        this.questions = response;
      },
      (error)=>
      {
        console.log(error)
      }
    )
    this.mode = 'exam'
  }

  onSelected(question: questions, option: options){
    question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
  }

  isAnswered(question: questions) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question:questions){
    return question.options.every(x => x.selected === x.answer) ? 'Correct' : 'Wrong';
  } 
}
