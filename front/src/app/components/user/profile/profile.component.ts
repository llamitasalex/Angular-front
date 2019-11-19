import { token } from './../../../interfaces/token';
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
    ) { }
  ngOnInit() {
    this.api.AuthToken()
  }

title() {
    this.api.Booktitle(this.book.title).subscribe((response: book) => {
      const obj = response;
      const book = JSON.stringify(obj);
      alert(book);
    }, (error: HttpErrorResponse) => {
      // Caso en el que ha habido un error.
      alert(error.message);
    });
}
ISBN() {
  this.api.BookISBN(this.book.ISBN).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    // Caso en el que ha habido un error.
    alert(error.message);
  });
}
author() {
  this.api.BookAuthor(this.book.author).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    // Caso en el que ha habido un error.
    alert(error.message);
  });
}
price() {
  this.api.BookPrice(this.book.price).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    // Caso en el que ha habido un error.
    alert(error.message);
  });
}
date() {
  this.api.BookDate(this.book.date).subscribe((response) => {
    alert('book find');
  }, (error: HttpErrorResponse) => {
    // Caso en el que ha habido un error.
    alert(error.message);
  });
}


}
