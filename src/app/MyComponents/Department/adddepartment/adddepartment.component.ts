import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Company } from 'src/Models/Company';
import { Department } from 'src/Models/Department';

import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent {

  constructor(private deptserv : DepartmentService,private router : Router,private compserv : CompanyService) {}

  department : Department = new Department();
  clist : any;
  did   : any;
  comp !: Company;
  ngOnInit(): void {
        this.compserv.getAllCompanies().subscribe(data=>this.clist=data);
  }
  onSubmit() {
      this.deptserv.saveDepartment(this.department).subscribe({
        complete:()=>{
          sessionStorage.setItem('response',this.department.dept_name+' is saved successfully' )
          this.router.navigate(['viewdepartment']);
        },
        error:(e)=>{
          sessionStorage.setItem('reserr',this.department.dept_name+' is not saved' )
          this.router.navigate(['viewdepartment']);
        }
      });
  }
  public goToViewDepartments() {
    this.router.navigate(['viewdepartment']);
  }
}
