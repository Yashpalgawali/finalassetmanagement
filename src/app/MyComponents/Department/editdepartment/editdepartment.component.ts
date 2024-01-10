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
   this.deptserv.getDepartmentById(this.did).subscribe({
                                    next:(data)=>{
                                        this.department = data;
                                        this.compserv.getAllCompanies().subscribe(data=>this.clist=data);
                                    },error : (e)=>{
                                      sessionStorage.setItem('reserr','No Department Found by given ID')
                                      this.router.navigate(['viewdepartment']);
                                    }
   });
    

  }

  public onSubmit() {
    this.deptserv.updateDepartment(this.department).subscribe({
      complete:()=>{
        sessionStorage.setItem('response',' Department '+this.department.dept_name+' is updated Successfully')
        this.router.navigate(['viewdepartment']);
      },
      error:(e) =>{
          sessionStorage.setItem('reserr','Department '+this.department.dept_name+' is not updated')
          this.router.navigate(['viewdepartment']);
       }
    });
  }
  public goToViewDepartments()
  {
    this.router.navigate(['viewdepartment']);
  } 
  
}
