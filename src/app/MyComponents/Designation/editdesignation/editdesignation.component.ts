import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';
import { Designation } from 'src/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-editdesignation',
  templateUrl: './editdesignation.component.html',
  styleUrls: ['./editdesignation.component.css']
})
export class EditdesignationComponent implements OnInit{
  constructor(private desigserv:DesignationService,private route :ActivatedRoute,private router : Router) {}
  did : any;  
  designation : Designation = new Designation();
  isDisabled : boolean =false

  ngOnInit(): void {
    this.did=this.route.snapshot.params['id'];
    this.desigserv.getDesignationById(this.did).subscribe({
      next : (data) => {
        if('errorCode' in data) {
          sessionStorage.setItem('reserr' , data.errorMessage)
          this.router.navigate(['designation/viewdesignations'])
        }
        else {
          this.designation = data
        }
      },
    });
  }

  onSubmit()
  {
    this.isDisabled =true
    this.desigserv.updateDesignation(this.designation).subscribe({next:(data)=> {
      if('statusCode' in data)
          {
            sessionStorage.setItem('response',data.statusMsg)
            this.router.navigate(['designation/viewdesignations'])
          }
          else {
            sessionStorage.setItem('reserr',data.errorMessage)
            this.router.navigate(['designation/viewdesignations'])
          }
        }
   });
  }
}
