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
  ques: any;
  answer: any;
  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  assessmentId: any;
  assessmentDetails: any;
  showQuestion: Boolean = false;
  questionDetails: any;

  constructor(
    private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.assessmentId = this.activatedRoute.snapshot.params.id;
    this.assessmentService.getAssessment(this.assessmentId).subscribe(res => {
      this.assessmentDetails = res;
    });
  }
  startAsessment() {
    this.showQuestion = true;
    this.assessmentService.getQuestions(this.assessmentId).subscribe(res => {
      this.questionDetails = res;
      console.log('Qestion', this.questionDetails);
      this.questionDetails.map(q => {
        this.ques = q;
        console.log('qqqqqqqqqq', this.ques);
      });
      this.ques.answers.map(ans => {
        this.answer = ans;
        console.log('aaaaaaa', this.answer);
      });
      // this.onSelect(this.ques, this.answer);
    });
  }

  get filteredQuestions() {
    return this.assessment.questions
      ? this.assessment.questions.slice(
          this.pager.index,
          this.pager.index + this.pager.size
        )
      : [];
  }

  onSelect(question: any, answer: any) {
    console.log('inside', this.questionDetails);
    question.answers.forEach(x => {
      if (x.id !== option.id) x.selected = false;
    });
    this.goTo(this.pager.index + 1);
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }
}
