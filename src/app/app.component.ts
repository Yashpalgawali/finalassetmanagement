import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from './Services/basic-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  static title = 'Asset Management';
  
  loggedUser : any
  constructor(private basicauthserv : BasicAuthenticationService) { }

  isUserLoggedIn() {
    // alert('Basic AUth User = '+this.basicauthserv.getAuthenticatedUser()+'\n session User '+sessionStorage.getItem('authenticatedUser'))
    if(this.basicauthserv.getAuthenticatedUser()!=null && (sessionStorage.getItem('authenticatedUser')!=null || localStorage.getItem('authenticatedUser')))
    {  return true }
    else
    { return false }
  }

  ngOnInit(): void {
    this.loggedUser = sessionStorage.getItem('authenticatedUser') || localStorage.getItem('authenticatedUser')
  }
}
 