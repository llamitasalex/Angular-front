import { Profile } from './../../../interfaces/profile';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from './../../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  
  constructor(
    private api: AuthService,
    private router: Router,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    const token = this.cookieService.get('token')
    const decode = jwt_decode(token);
    this.cookieService.set('mail', decode.email);
    this.api.authToken(token).subscribe((response) => {
      const mail = this.cookieService.get('mail');
      this.api.getUser(mail).subscribe((response: { user: Object}) => {
        console.log(response);
        this.profile = response.user;
        
    }, (error: HttpErrorResponse) => { });
    }, (error: HttpErrorResponse) => {
      this.router.navigateByUrl('/user/login');
    });
  }


}
