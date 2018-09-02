import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AssessmentService {
  constructor(public http: HttpClient) {}

  getAssessments() {
    return this.http.get("http://localhost:3000/api/v1/assessments.json");
  }
}
