import { Book } from './../interfaces/book';
import { User } from './../interfaces/user';
import { register } from './../interfaces/Register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
   header: new HttpHeaders({
   'token-access': 'my-auth-token'
 })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private http:HttpClient) { } 

   private adress = 'http://localhost:3001/api/';

  loginUser(user:User){
    return this.http.post(`${this.adress}user/login/`, user );
  }
  registerUser(register:register){
    return this.http.post(`${this.adress}user/`, register);
  }
  getUser(mail: string){
    return this.http.get(`${this.adress}user/profile/${mail}`);
  }
  Book(par:string){
    return this.http.get(`${this.adress}book/search/${par}`);
  }
  Booktitle(title: string){
    return this.http.get(`${this.adress}book/title/${title}`);
  }
  BookISBN(isbn: string){
    return this.http.get(`${this.adress}book/ISBN/${isbn}`);
  }
  BookAuthor(author: string){
    return this.http.get(`${this.adress}book/author/${author}`);
  }
  BookPrice(price: string){
    return this.http.get(`${this.adress}book/price/${price}`);
  }
  BookDate(date: string){
    return this.http.get(`${this.adress}book/date/${date}`);
  }
  token(token: string){
    httpOptions.header= httpOptions.header.set('token-access', token );
  }
  authToken(token: string){
    httpOptions.header= httpOptions.header.set('token-access', token );
    return this.http.get(`${this.adress}user/me/token`, { headers : httpOptions.header} );
  }
  
}
