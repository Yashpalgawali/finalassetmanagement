import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'jquery';
import { Designation } from 'src/Models/Designation';
import { DesignationService } from 'src/app/Services/designation.service';

@Component({
  selector: 'app-editdesignation',
  templateUrl: './editdesignation.component.html',
  styleUrls: ['./editdesignation.component.css']
})
export class EditdesignationComponent {
  constructor(private desigserv:DesignationService,private route :ActivatedRoute,private router : Router) {}
  did : any;
  
  designation : Designation = new Designation();
  ngOnInit(): void {
    this.did=this.route.snapshot.params['id'];
    this.desigserv.getDesignationById(this.did).subscribe(data=>this.designation=data);
  }

  onSubmit()
  {
    this.desigserv.updateDesignation(this.designation).subscribe(data=>{
                                                                        sessionStorage.setItem('response','Designation is updated successfully')  
                                                                        this.goToViewDesignations()},
                                                                        error=>{
                                                                          sessionStorage.setItem('reserr','Designation is not updated')
                                                                        });
  }
  goToViewDesignations()
  {
    this.router.navigate(['viewdesignation']);
  }
}
