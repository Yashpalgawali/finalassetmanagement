import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
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
  employee  : Employee = new Employee()

  ngOnInit(): void {
      this.desigserv.getAllDesignations().subscribe(data=>{this.desiglist=data })
      this.compserv.getAllCompanies().subscribe(data=>this.clist=data)
      this.assetserv.getAllAssets().subscribe(data=>this.assetlist=data)

  }

  onSubmit()
  {
    this.empserv.saveEmployee(this.employee).subscribe({
                              complete:()=>{
                                alert('Employee '+this.employee.emp_name+' is saved')
                                this.router.navigate(['viewemployee'])
                              },
                              error :(e)=>{
                                alert('Employee '+this.employee.emp_name+' employee not saved')
                                this.router.navigate(['viewemployee'])
                              }
    })
  }

  getdeptbycompid(cid : any)
  {
    this.deptserv.getDepartmentByCompName(cid.target.value).subscribe(data=>this.deptlist=data)
  }
}
