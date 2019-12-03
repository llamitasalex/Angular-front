import { Book } from '../../../interfaces/book';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alert, ALERT1 } from '../../../interfaces/alert';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {

  books: Book[] ;
  book: Book;
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


  findAll(form,alert: Alert){
    this.api.Booktitle(form.value.data).subscribe((response: {book: Book[]}) => {
      if (response.book[0]!=null) {
        console.log(response);
        this.books = response.book;
      } else {
        this.api.BookISBN(form.value.data).subscribe((response: {book: Book[]}) => {
          if(response.book[0]!=null){
          console.log(response);
          this.books = response.book;
          } else {
            this.api.BookAuthor(form.value.data).subscribe((response: {book: Book[]}) => {
              if(response.book[0]!=null){
              console.log(response);
              this.books = response.book;
              } else {
                this.api.BookPrice(form.value.data).subscribe((response: {book: Book[]}) => {
                  if(response.book[0]!=null){
                  console.log(response);
                  this.books = response.book;
                  } else {
                    this.api.BookDate(form.value.data).subscribe((response: {book: Book[]}) => {
                      if(response.book[0]!=null){
                        console.log(response);
                        this.books = response.book;
                      } else {
                          this.books = response.book; 
                          this.alerts = Array.from(ALERT1);
                      }
                    }, (error: HttpErrorResponse) => {  });
                  }
                }, (error: HttpErrorResponse) => {  });
              }
            }, (error: HttpErrorResponse) => {  });
          }
        }, (error: HttpErrorResponse) => { });
      }
    }, (error: HttpErrorResponse) => { });
  }

  title(form,alert: Alert) {
    console.log(form.value);
    this.api.Booktitle(form.value.data).subscribe((response: {book: Book[]}) => {
      console.log(response);
      this.books = response.book;
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }, (error: HttpErrorResponse) => {
      //alert(error.message);
      this.alerts = Array.from(ALERT1);
    });
  }

  ISBN(form,alert: Alert) {
    console.log(form.value);
    this.api.BookISBN(form.value.data).subscribe((response: {book: Book[]}) => {
      console.log(response);
      this.books = response.book;
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
  author(form,alert: Alert) {
    console.log(form.value);
    this.api.BookAuthor(form.value.data).subscribe((response: {book: Book[]}) => {
      console.log(response);
      this.books = response.book;
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
  price(form,alert: Alert) {
    console.log(form.value);
    this.api.BookPrice(form.value.data).subscribe((response: {book: Book[]}) => {
      console.log(response);
      this.books = response.book;
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
  date(form,alert: Alert) {
    console.log(form.value);
    this.api.BookDate(form.value.data).subscribe((response: {book: Book[]}) => {
      console.log(response);
      this.books = response.book;
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }, (error: HttpErrorResponse) => {
      this.alerts = Array.from(ALERT1);
    });
  }
}
