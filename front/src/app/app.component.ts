import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Login con Api';

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/user/login');
  }
  register(){
    this.router.navigateByUrl('user/register')
  }
}
