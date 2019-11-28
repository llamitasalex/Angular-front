import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { token } from '../../../interfaces/token';
import { CookieService } from 'ngx-cookie-service';
import { Alert, ALERT2 } from '../../../interfaces/alert';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alerts: Alert[];

  constructor(
    private api: AuthService, 
    private router: Router,
    private cookieService: CookieService,
    ) { }

  ngOnInit() {
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  enviar(data) {
    console.log(data.value);
    this.api.loginUser(data.value).subscribe((response: token) => {
      alert('Login correcto');
      this.cookieService.set('token', response.token);
      this.api.token(response.token);
      this.router.navigateByUrl('/user/profile');
    }, (error: HttpErrorResponse) => {
      // alert(error.message);
      this.alerts = Array.from(ALERT2);
    });
}

}
