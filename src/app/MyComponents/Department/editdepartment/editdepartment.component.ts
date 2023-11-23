import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/Models/Department';

import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent {

  constructor(private deptserv : DepartmentService, private route : ActivatedRoute,private router : Router,private compserv : CompanyService) {}

  did : any;
  clist : any;
  department : Department = new Department();
  ngOnInit(): void {
    this.did = this.route.snapshot.params['id'];
    this.deptserv.getDepartmentById(this.did).subscribe(data=>this.department=data);
    this.compserv.getAllCompanies().subscribe(data=>this.clist=data);

  }

  public onSubmit() {
    this.deptserv.updateDepartment(this.department).subscribe(data=>{ 
                                                                    sessionStorage.setItem('response','Company updated Successfully')
                                                                    this.goToViewDepartments()
                                                              });
  }
  public goToViewDepartments()
  {
    this.router.navigate(['viewdepartment']);
  } 
  
}
