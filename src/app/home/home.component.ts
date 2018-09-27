import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../commonService/assessment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  assessmentsArray: any = [];
  constructor(
    public assessmentService: AssessmentService,
    public router: Router
  ) {}

  ngOnInit() {
    this.assessmentService.getAssessments().subscribe(res => {
      this.assessmentsArray = res;
      console.log('a', this.assessmentsArray);
    });
  }
  getAsessment(id) {
    console.log('assessment id is:' + id);
    this.router.navigate(['/assessments', id]);
  }
}
