import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  title : any
  user : any
  ngOnInit(): void {
    this.title = sessionStorage.getItem('title')
    this.user = sessionStorage.getItem('authenticatedUser')
      sessionStorage.removeItem('otp')
  }
}
