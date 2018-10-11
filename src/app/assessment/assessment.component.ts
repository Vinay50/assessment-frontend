import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../commonService/assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessments: any[];
  mode = 'quiz';
  assessmentName: string;
  userIndex: any;
  selectedOption: any;
  assessmentId: any;
  assessmentDetail: any;
  showQuestion: Boolean = false;
  questionDetails: any;

  constructor(
    private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userIndex = 0;
    this.assessmentId = this.activatedRoute.snapshot.params.id;
    this.assessmentService.getAssessment(this.assessmentId).subscribe(res => {
      this.assessmentDetail = res;
    });
  }
  startAsessment() {
    this.showQuestion = true;
    this.assessmentService.getQuestions(this.assessmentId).subscribe(res => {
      this.questionDetails = res;
      console.log('question:' + this.questionDetails);
    });
  }

  changeIndex(number, answerid) {
    console.log('length is: ' + this.questionDetails.length);
    console.log('userindex is: ' + this.userIndex);
    this.selectedOption = this.questionDetails[this.userIndex].answers.filter(
      item => item.id === answerid
    )[0];
    if (
      (this.userIndex > 0 && number < 0) ||
      (this.userIndex < this.questionDetails.length &&
        number > 0 &&
        this.questionDetails.length - this.userIndex > 1)
    ) {
      this.userIndex += number;
    }
  }
}
