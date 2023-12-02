import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Login } from 'src/Models/Login';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : Login = new Login()
  errorMessage  : any
  logoutsuccess : any

  constructor(private basicauthserv : BasicAuthenticationService,private router : Router) { }

  onSubmit()
  {
    //alert(this.login.username+'=>> '+this.login.password)
      this.basicauthserv.executeAuthenticationService(this.login.username,this.login.password).subscribe(data=>{
      this.router.navigate(['adminhome'])
    })
  }
  
}