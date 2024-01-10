import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Company } from 'src/Models/Company';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';
import { AssetService } from 'src/app/Services/asset.service';
import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { DesignationService } from 'src/app/Services/designation.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {

  constructor(private empserv : EmployeeService,private router   : Router,
              private route   : ActivatedRoute, private deptserv : DepartmentService,
              private assetserv : AssetService, private compserv : CompanyService,
              private desigserv : DesignationService
              ) { }
  emp_id    !: number
  department : Department = new Department();
  clist      : any
  desiglist  : any
  assetlist  : any
  deptlist   : Department[] = [];
  employee  :  Employee = new Employee()
  // selectedItems : Department[] = [];
  ngOnInit():  void {
    this.emp_id = this.route.snapshot.params['id']
    this.empserv.getEmployeeById(this.emp_id).subscribe(data=>{
                                                              this.employee=data
                                                            })
    this.assetserv.getAllAssets().subscribe(data=>this.assetlist=data)
    this.compserv.getAllCompanies().subscribe(data=>this.clist=data)
    this.desigserv.getAllDesignations().subscribe(data=>this.desiglist=data)
  }

  onSubmit()
  {
    alert(this.employee.asset_ids)
  }

  getdeptbycompid(comp : Company)
  {
    this.deptserv.getDepartmentByCompId(comp.comp_id).subscribe(data=>this.deptlist=data)
  }
}
