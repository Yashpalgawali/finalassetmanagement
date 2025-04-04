import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getJSON } from 'jquery';
import { Department } from 'src/Models/Department';

import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {


  constructor(private deptserv : DepartmentService,
              private route : ActivatedRoute,
              private router : Router,
              private compserv : CompanyService) { }

  did : any;
  clist : any;
  
  department : Department = new Department();
  selectedValue: any;

  ngOnInit(): void {
   this.did = this.route.snapshot.params['id'];
   this.deptserv.getDepartmentById(this.did).subscribe({
                                    next:(data)=>{
                                        this.department = data;
                                        this.compserv.getAllCompanies().subscribe(data=>{this.clist=data 
                                          for(let index=0;index<this.clist.length;index++)
                                          {
                                            if(this.department.company.comp_id==this.clist[index].comp_id)
                                            {
                                              this.selectedValue=this.clist[index]
                                            }
                                          }
                                        });
                                    },error : (e)=>{
                                      sessionStorage.setItem('reserr','No Department Found by given ID')
                                      this.router.navigate(['viewdepartment']);
                                    }
   });
  }
  onDropdownChange(newValue: any) {
    this.compserv.getAllCompanies().subscribe(data=>{this.clist=data 
      for(let index=0;index<this.clist.length;index++)
      {
        if(newValue.comp_id==this.clist[index].comp_id)
        {
          this.selectedValue=this.clist[index]
        }
      }
    });
  }

  public onSubmit() {
   this.department.company=this.selectedValue
    
    this.deptserv.updateDepartment(this.department).subscribe({
      complete:()=>{
        sessionStorage.setItem('response',' Department '+this.department.dept_name+' is updated Successfully')
        this.router.navigate(['department/viewdepartments']);
      },
      error:(e) =>{
          sessionStorage.setItem('reserr','Department '+this.department.dept_name+' is not updated')
          this.router.navigate(['department/viewdepartments']);
       }
    });
  }
  public goToViewDepartments()
  {
    this.router.navigate(['department/viewdepartments']);
  } 
  
}
