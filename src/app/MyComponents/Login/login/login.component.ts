import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Login } from 'src/Models/Login';
import { JwtAuthenticationService } from 'src/app/Services/Authentication/jwt-authentication.service';
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

  constructor(private basicauthserv : BasicAuthenticationService,private router : Router,
              private jwtauthserv : JwtAuthenticationService
  ) { }

  ngOnInit(): void {
    
    this.logoutsuccess = sessionStorage.getItem('response')
    setTimeout(() => {
        this.logoutsuccess=""
    }, 5000);
    
    if(sessionStorage.getItem('authenticatedUser')!=null ) {
      this.router.navigate(['adminhome'])
    } 
  }

  onSubmit()
  {
    this.jwtauthserv.executeJwtAuthenticationService(this.login.username,this.login.password).subscribe({
      next:(data)=> {
        
          sessionStorage.removeItem('response')
          this.router.navigate(['adminhome'])
      },
        error:(err)=>{
          this.errorMessage="Invalid Credentials"
          this.router.navigate(['login'])
      } 
      })
    //   this.basicauthserv.executeAuthenticationService(this.login.username,this.login.password).subscribe(data=>
    //   {
    //     sessionStorage.removeItem('response')
    //     this.router.navigate(['adminhome'])
    //   },
    //   error=>{
    //     this.errorMessage="Invalid Credentials"
    //     this.router.navigate(['login'])
    // })
  }
  
}
