import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { token } from '../../../interfaces/token';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: AuthService, 
    private router: Router,
    
    ) { }

  ngOnInit() {
  }
  enviar(data) {
    console.log(data.value);
    this.api.loginUser(data.value).subscribe((response: token) => {
      this.api.token(response.token);
      alert('Login correcto');
      this.router.navigateByUrl('/user/profile');
    }, (error: HttpErrorResponse) => {
      // Caso en el que ha habido un error.
      alert(error.message);
    });
}

}
