import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
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

  ngOnInit(): void {
    
    if(sessionStorage.getItem('authenticatedUser')!=null )
    {
      this.router.navigate(['adminhome'])
    } 
  }

  onSubmit()
  {
      this.basicauthserv.executeAuthenticationService(this.login.username,this.login.password).subscribe(data=>
        {
          //this.logoutsuccess = sessionStorage.getItem('response')
          this.router.navigate(['adminhome'])
        },
        error=>{
          this.errorMessage="Invalid Credentials"
          this.router.navigate(['login'])
    })
  }
  
}
