import { Component, OnInit } from "@angular/core";
import { AssessmentService } from "../commonService/assessment.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  assessmentsArray: any = [];
  constructor(public assessmentService: AssessmentService) {}

  ngOnInit() {
    this.assessmentService.getAssessments().subscribe(res => {
      this.assessmentsArray = res;
      console.log("aaaaaaaaaaaaaa", this.assessmentsArray);
    });
  }
}
