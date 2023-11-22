import { Component } from '@angular/core';
import { data } from 'jquery';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';

import { Company } from 'src/Models/Company';
import { Department } from 'src/Models/Department';
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
employee   : Employee = new Employee();
department : Department = new Department();
clist      : any
desiglist  : any
assetlist  : any
deptlist   : Department[] = [];


  constructor(private compserv  : CompanyService,
              private desigserv : DesignationService,
              private deptserv  : DepartmentService,
              private assetserv : AssetService,
              private empserv   : EmployeeService
               ) {
  }


  ngOnInit(): void {
        this.compserv.getAllCompanies().subscribe(data=>this.clist=data)
        this.desigserv.getAllDesignations().subscribe(data=>{this.desiglist=data})
        this.assetserv.getAllAssets().subscribe(data=>this.assetlist=data)
  }

  onSubmit()
  {
    //alert(this.employee.asset_ids)
    this.empserv.saveEmployee(this.employee).subscribe(data=>alert('emp saved successfully'))
  }

  getdeptbycompid(comp : Company)
  {
    this.deptserv.getDepartmentByCompId(comp.comp_id).subscribe(data=>this.deptlist=data)
  }
}
