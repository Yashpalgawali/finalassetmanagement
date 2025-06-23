import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { Login } from 'src/Models/Login';
import { JwtAuthenticationService } from 'src/app/Services/Authentication/jwt-authentication.service';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login = new Login()
  errorMessage  : any
  successMessage  : any
  logoutsuccess : any
  reserr : any

  constructor(private basicauthserv : BasicAuthenticationService,private router : Router,
              private jwtauthserv : JwtAuthenticationService, private appcomp : AppComponent
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('title',AppComponent.title)
    this.logoutsuccess = sessionStorage.getItem('logoutsuccess')
    
    if(sessionStorage.getItem('errorMessage')!=null) {
      this.errorMessage = sessionStorage.getItem('errorMessage')
      setTimeout(() => {
        sessionStorage.removeItem('errorMessage')
        this.errorMessage=''
      }, 2000);
    }

    if(sessionStorage.getItem('response')!=null) {
      this.successMessage = sessionStorage.getItem('response')
      setTimeout(() => {
        sessionStorage.removeItem('response')
        this.successMessage=''
      }, 2000);
    }
    
    setTimeout(() => {
        this.logoutsuccess=""
        sessionStorage.removeItem('logoutsuccess')
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
