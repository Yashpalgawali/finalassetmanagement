import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from 'src/app/Services/Authentication/jwt-authentication.service';
import { BasicAuthenticationService } from 'src/app/Services/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private basicauthserv : BasicAuthenticationService , private jwtAuthServ : JwtAuthenticationService,
                     private router : Router) { }
  logoutsuccess !: string
  ngOnInit(): void {
    
    this.jwtAuthServ.logout();
   
  }

}
