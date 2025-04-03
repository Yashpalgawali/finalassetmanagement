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
      complete:()=>{
        sessionStorage.setItem('response',this.designation.desig_name+' is saved successfully' )
        this.router.navigate(['designation/viewdesignations']);
      },
      error:(e)=>{
        sessionStorage.setItem('reserr',this.designation.desig_name+' is not saved' )
        this.router.navigate(['designation/viewdesignations']);
      }
    })
  }

  goToViewDesignations()
  {
    this.router.navigate(['designation/viewdesignations']);
  }
}
