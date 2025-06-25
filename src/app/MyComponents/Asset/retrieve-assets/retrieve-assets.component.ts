import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data, error, map } from 'jquery';
import { pipe } from 'rxjs';
import { Assets } from 'src/Models/Assets';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { Employee } from 'src/Models/Employee';
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
  already_assigned : any
  ndata : any
  employee : Employee = new Employee()
 
  assigned   : any
  emp_id    !: number
  assetlist  : Assets[] = []
  matched    : any
  assets     : Assets = new Assets()

  ngOnInit(): void {
    this.emp_id= this.route.snapshot.params['id'];
    this.assignassetserv.getAssignedAssetsByEmpId(this.emp_id).subscribe({
                                                        next:(data)=>
                                                        { 
                                                          if(data.length != 0 ) {                                                            
                                                          
                                                          console.log('DATA is ',data)
                                                          this.assignedassets=data
                                                          this.employee =this.assignedassets[0].employee
                                                      
                                                          for (let index = 0; index < this.assignedassets.length; index++) {
                                                            if(index==0)
                                                            {
                                                              this.already_assigned = this.assignedassets[index].asset.asset_name+"("+this.assignedassets[index].asset.model_number+")"
                                                            }
                                                            else{
                                                              this.already_assigned = this.already_assigned +","+ this.assignedassets[index].asset.asset_name+"("+this.assignedassets[index].asset.model_number+")"
                                                            }
                                                          }
                                                        }
                                                        else {
                                                            sessionStorage.setItem('reserr','No assets are assigned ')
                                                                this.router.navigate(['/employee/viewemployees'])
                                                        }
                                                        },error:(e)=>{
                                                                sessionStorage.setItem('reserr',e.error.errorMessage)
                                                                this.router.navigate(['/employee/viewemployees'])
                                                              }
                                                        })
  }

  onSubmit()
  {     
    this.empserv.retrieveAllAssetsByEmpId(this.employee).subscribe(
      {
        next:(data) => {
            sessionStorage.setItem('response','')
            this.router.navigate(['/employee/viewemployees'])
        },
      })
  }
}
