import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Alert, ALERT3 } from '../../../interfaces/alert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alerts: Alert[];

  constructor(
    private api: AuthService, 
  ) { }

  ngOnInit() {
  }
  
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  registrar(data) {
    console.log(data.value);
    this.api.registerUser(data.value).subscribe((response) => {
      alert('usuario guardado correctamente');
    }, (error: HttpErrorResponse) => {
      //alert(error.message);
      this.alerts = Array.from(ALERT3);
    });
}
}
