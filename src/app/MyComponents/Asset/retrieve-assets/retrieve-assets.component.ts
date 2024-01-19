import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error, map } from 'jquery';
import { pipe } from 'rxjs';
import { Assets } from 'src/Models/Assets';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { Employee } from 'src/Models/Employee';
// import { Employee } from 'src/Models/Employee';
import { AssetService } from 'src/app/Services/asset.service';
import { AssignedAssetService } from 'src/app/Services/assigned-asset.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-retrieve-assets',
  templateUrl: './retrieve-assets.component.html',
  styleUrls: ['./retrieve-assets.component.css']
})
export class RetrieveAssetsComponent {

  constructor(private assetserv : AssetService,private route : ActivatedRoute, private router : Router,
              private assignassetserv : AssignedAssetService,private empserv : EmployeeService) { }
  assigned_assets :  AssignedAssets = new AssignedAssets();
  assignedassets  :  AssignedAssets[] = []
  already_assigned : Assets[] = []
  employee : Employee = new Employee()
 
  assigned : any
  emp_id !:  number
  assetlist  : Assets[] = []
  matched : Assets[]= []
  assets : Assets = new Assets()
  ngOnInit(): void {
    this.emp_id= this.route.snapshot.params['id'];
    this.assignassetserv.getAssignedAssetsByEmpId(this.emp_id).subscribe({
                                                        next:(data)=>
                                                        {
                                                          this.assignedassets=data
                                                          this.employee =this.assignedassets[0].employee
                                                          this.assetserv.getAllAssets().subscribe({
                                                            next:(data)=>{
                                                              this.assetlist=data
                                                            }
                                                          })
                                                         
                                                          for (let index = 0; index < this.assignedassets.length; index++) {
                                                            
                                                            this.already_assigned[index] = this.assignedassets[index].asset
                                                          }
                                                          for (let index = 0; index < this.already_assigned.length; index++) {
                                                            alert(this.already_assigned[index])
                                                          }
                                                        },error:(e)=>{
                                                                sessionStorage.setItem('reserr','No Assets Are assigned')
                                                                this.router.navigate(['viewemployee'])
                                                              }
                                                        })
  }

  onSubmit()
  {
    alert('retrive assets called '+this.assigned_assets.employee.emp_id)
    this.empserv.retrieveAllAssetsByEmpId(this.assigned_assets)
  }
}
