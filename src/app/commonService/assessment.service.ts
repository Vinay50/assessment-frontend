import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  constructor(public http: HttpClient) {}

  getAssessments() {
    return this.http.get('http://localhost:3000/api/v1/assessments.json');
  }

  getAssessment(id) {
    return this.http.get(`http://localhost:3000/api/v1/assessments/${id}`);
  }

  getQuestions(id) {
    return this.http.get(
      `http://localhost:3000/api/v1/assessments/${id}/questions.json`
    );
  }
}
