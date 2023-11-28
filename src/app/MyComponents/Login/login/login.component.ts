import { Component } from '@angular/core';
import { Login } from 'src/Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : Login = new Login()
  errorMessage  : any
  logoutsuccess : any

  constructor() { }

  onSubmit()
  {
    
  }
  
}
