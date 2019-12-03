import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  title = 'Login whith an Api';

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('/home');
  }
  login() {
    this.router.navigateByUrl('/user/login');
  }
  register(){
    this.router.navigateByUrl('user/register')
  }
  profile(){
    this.router.navigateByUrl('/user/profile')
  }
  search(){
    this.router.navigateByUrl('/books/search')
  }
}
