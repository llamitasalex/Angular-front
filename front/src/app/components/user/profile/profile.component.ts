import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Book } from '../../../interfaces/book.model';
import { AuthService } from './../../../service/auth.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { book } from '../../../interfaces/bookrp'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  book = new Book

  constructor(
    private api: AuthService,
    private router: Router,
    private cookieService: CookieService,
    ) { }

  ngOnInit() {
    const token = this.cookieService.get('token')
    this.api.authToken(token).subscribe((response) => {
      alert('token valido');
    },(error: HttpErrorResponse) => {
      alert(error.message);
      this.router.navigateByUrl('/user/login');
    });

  }

title() {
    this.api.Booktitle(this.book.title).subscribe((response: book) => {
      const obj = response;
      const book = JSON.stringify(obj);
      alert(book);
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });
}
ISBN() {
  this.api.BookISBN(this.book.ISBN).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    alert(error.message);
  });
}
author() {
  this.api.BookAuthor(this.book.author).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    alert(error.message);
  });
}
price() {
  this.api.BookPrice(this.book.price).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    alert(error.message);
  });
}
date() {
  this.api.BookDate(this.book.date).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    alert(error.message);
  });
}


}
