import { Profile } from './../../../interfaces/Profile';
import { AuthService } from './../../../service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';


import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }

  Profile(){
  
  }

}
