import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { map } from 'rxjs';
import { Assets } from 'src/Models/Assets';
import { Company } from 'src/Models/Company';
import { Department } from 'src/Models/Department';
import { Designation } from 'src/Models/Designation';
import { Employee } from 'src/Models/Employee';
import { AssetService } from 'src/app/Services/asset.service';
import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  constructor(private empserv : EmployeeService,
              private router  : Router,
              private desigserv : DesignationService,
              private compserv : CompanyService,
              private deptserv : DepartmentService,
              private assetserv: AssetService){}

  desiglist : Designation[] = []
  clist     : Company [] = []
  deptlist  : Department[] = []
  assetlist : Assets [] = []
  isDisabled : boolean = false
  employee  : Employee = new Employee()

  ngOnInit(): void {
      this.desigserv.getAllDesignations().subscribe(data=>{this.desiglist=data })
      this.compserv.getAllCompanies().subscribe(data=>this.clist=data)
      this.assetserv.getAllAssets().subscribe({
          next:(data)=>{
              this.assetlist = data.filter(ast => ast.quantity>=1).map(
                e=>{
                   e.asset_name = `${e.asset_name} (${e.model_number})`
                  return e
                }
              )
            }
        })

  }

  get availableAssets()
  {
    return this.assetlist
    .filter(asset => asset.quantity > 0)
    .map(asset => ({ ...asset, disabled: asset.quantity === 0 }));
  }

  isAssetDisabled(asset: any): boolean {
    return asset.quantity === 0;
  }
  onSubmit()
  {
    setTimeout(() => {
      this.isDisabled = true
    }, 2000);
    this.empserv.saveEmployee(this.employee).subscribe({
                              complete:()=>{
                                sessionStorage.setItem('response','Assets are assigned to Employee '+this.employee.emp_name+' successfully')
                                this.router.navigate(['/employee/viewemployees'])
                              },
                              error :(e)=>{
                                sessionStorage.setItem('reserr','Assets are NOT assigned to Employee '+this.employee.emp_name)
                                this.router.navigate(['/employee/viewemployees'])
                              }
    })
  }

  getdeptbycompid(cid : any)
  {
    this.deptserv.getDepartmentByCompName(cid.target.value).subscribe(data=>this.deptlist=data)
  }
}
