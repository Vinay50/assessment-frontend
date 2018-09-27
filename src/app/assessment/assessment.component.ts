import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../commonService/assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessmentId: any;
  assessmentDetails: any;
  constructor(
    private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.assessmentId = this.activatedRoute.snapshot.params.id;
    this.assessmentService.getAssessment(this.assessmentId).subscribe(res => {
      this.assessmentDetails = res;
      console.log('wwwww', this.assessmentDetails);
    });
  }
}
