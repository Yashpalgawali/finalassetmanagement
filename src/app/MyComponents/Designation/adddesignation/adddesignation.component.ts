import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {
  designation : Designation = new Designation();
  
  constructor(private desigserv : DesignationService ,private router : Router){  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  } 
  onSubmit()
  { 
    this.desigserv.saveDesignation(this.designation).subscribe({
      next:(data)=>{
        if('statusCode' in data) {
          sessionStorage.setItem('response',data.statusMsg )
          this.router.navigate(['designation/viewdesignations']);
        }
        else {
          sessionStorage.setItem('response',data.errorMessage )
          this.router.navigate(['designation/viewdesignations']);
        }
        
      }
    })
  }

  goToViewDesignations()
  {
    this.router.navigate(['designation/viewdesignations']);
  }
}
