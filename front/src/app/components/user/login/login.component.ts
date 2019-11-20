import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { token } from '../../../interfaces/token';
import { CookieService } from 'ngx-cookie-service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: AuthService, 
    private router: Router,
    private cookieService: CookieService,
    
    ) { }

  ngOnInit() {
  }
  enviar(data) {
    console.log(data.value);
    this.api.loginUser(data.value).subscribe((response: token) => {
      alert('Login correcto');
      this.cookieService.set('token', response.token);
      this.api.token(response.token);
      this.router.navigateByUrl('/user/profile');
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });
}

}
