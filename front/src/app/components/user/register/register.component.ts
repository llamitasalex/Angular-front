import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private api: AuthService, 
  ) { }

  ngOnInit() {
  }

  registrar(data) {
    console.log(data.value);
    this.api.registerUser(data.value).subscribe((response) => {
      alert('usuario guardado correctamente');
    }, (error: HttpErrorResponse) => {
      // Caso en el que ha habido un error.
      alert(error.message);
    });
}
}
