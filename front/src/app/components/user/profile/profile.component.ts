import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from './../../../service/auth.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alert, ALERT1 } from '../../../interfaces/alert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  book = new Object();
  alerts: Alert[];


  constructor(
    private api: AuthService,
    private router: Router,
    private cookieService: CookieService,
    
  ) { }

  ngOnInit() {
    const token = this.cookieService.get('token')
    this.api.authToken(token).subscribe((response) => {
    }, (error: HttpErrorResponse) => {
      this.router.navigateByUrl('/user/login');
    });
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }


  title(form) {
    console.log(form.value);
    this.api.Booktitle(form.value.data).subscribe((response: {book: Object}) => {
      console.log(response);
      this.book = response.book;
    }, (error: HttpErrorResponse) => {
      //alert(error.message);
      this.alerts = Array.from(ALERT1);
    });
  }

  ISBN(form) {
    console.log(form.value);
    this.api.BookISBN(form.value.data).subscribe((response: {book: Object}) => {
      console.log(response);
      this.book = response.book;
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
  author(form) {
    console.log(form.value);
    this.api.BookAuthor(form.value.data).subscribe((response: {book: Object}) => {
      console.log(response);
      this.book = response.book;
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
  price(form) {
    console.log(form.value);
    this.api.BookPrice(form.value.data).subscribe((response: {book: Object}) => {
      console.log(response);
      this.book = response.book;
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
  date(form) {
    console.log(form.value);
    this.api.BookDate(form.value.data).subscribe((response: {book: Object}) => {
      console.log(response);
      this.book = response.book;
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
}
