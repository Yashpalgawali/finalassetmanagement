import { Component } from '@angular/core';
import { BasicAuthenticationService } from './Services/basic-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalassetmanagement';
  
  loggedUser : any
  constructor(private basicauthserv : BasicAuthenticationService) { }

  isUserLoggedIn() {
   // alert('Basic AUth User = '+this.basicauthserv.getAuthenticatedUser()+'')
    if(this.basicauthserv.getAuthenticatedUser()!=null && (sessionStorage.getItem('authenticatedUser')!=null || localStorage.getItem('authenticatedUser')))
      return true
    else
      return false
  }
  ngOnInit(): void {
    this.loggedUser = sessionStorage.getItem('authenticatedUser')
  }
}
