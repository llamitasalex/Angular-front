import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Profile } from './../../../interfaces/Profile';
import { strorage } from 'angular-storage';

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
    this.api.loginUser(data.value).subscribe((response:Profile) => {
      // Caso en el que todo ha ido bien.
      
      alert('Login correcto');
      this.router.navigateByUrl('/user/profile');
    }, (error: HttpErrorResponse) => {
      // Caso en el que ha habido un error.
      alert(error.message);
    });
}

}
