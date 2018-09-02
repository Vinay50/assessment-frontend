import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment-frontend';
  constructor(private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);
    this.authToken;
  }
}
