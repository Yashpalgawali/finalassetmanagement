import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private basicauthserv : BasicAuthenticationService ,private router : Router) { }
  logoutsuccess !: string
  ngOnInit(): void {
    
    this.basicauthserv.logout();
    this.logoutsuccess="Successfully Logged Out"
    sessionStorage.setItem('logoutsuccess',this.logoutsuccess)
    this.router.navigate([''])
  }

}
