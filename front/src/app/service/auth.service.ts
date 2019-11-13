import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private http:HttpClient) { } 

   private adress = 'http://localhost:3001/api/';

  loginUser(user:User){
    return this.http.post(`${this.adress}user/login/`, user );
  }
/*  userAuth(/*headers){
    return this.http.get(`${this.adress}user/me/token/`/*, {headers: headers} );
  }
*/
}
