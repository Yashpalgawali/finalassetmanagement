import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {

  constructor(private empserv : EmployeeService,
    private router  : Router,
    private desigserv : DesignationService,
    private compserv : CompanyService,
    private deptserv : DepartmentService,
    private assetserv: AssetService,
    private route : ActivatedRoute) { }

    desiglist : Designation[] = []
    clist : Company [] = []
    deptlist : Department[] = []
    assetlist : Assets [] = []
    employee : Employee = new Employee()
    emp_id   !: number
    selectedCompany : Company = new Company()
    assigned_assets !: string
    bindlables : any
    selectedDesignation : any
    matchedAssets : any
    ngOnInit(): void {
   
    this.emp_id = this.route.snapshot.params['id']
    
    this.empserv.getEmployeeById(this.emp_id).subscribe({
      next:(data)=>{
        this.employee=data
        this.selectedCompany = this.employee.department.company
        
        this.assigned_assets = this.employee.assigned_assets
        
        this.desigserv.getAllDesignations().subscribe(data=>{this.desiglist=data
          for(let i=0;i<this.desiglist.length;i++)
          {
            if(this.desiglist[i].desig_id==this.employee.designation.desig_id)
            {
              this.selectedDesignation=this.desiglist[i]
            }
          }
        })
        this.compserv.getAllCompanies().subscribe(data=>this.clist=data)
        this.assetserv.getAllAssets().subscribe(data=>{
                                                    this.assetlist=data
                                                })
      },
      error:(e) =>{
        sessionStorage.setItem('reserr','No Employee Found for given ID ')
        this.router.navigate(['viewemployee'])
      }
    })
}

dropDownValueChange(newValue: any) {
  this.desigserv.getAllDesignations().subscribe(data=>{this.desiglist=data
    for(let i=0;i<this.desiglist.length;i++)
    {
      if(this.desiglist[i].desig_id==newValue.desig_id)
      {
        this.selectedDesignation=this.desiglist[i]
      }
    }
  })
}

onSubmit(){
  this.employee.designation=this.selectedDesignation
 
  this.empserv.updateEmployee(this.employee).subscribe({
                  complete:()=>{
                    sessionStorage.setItem('response','Employee '+this.employee.emp_name+' is updated successfully')
                    this.router.navigate(['viewemployee'])
                  },
                  error:(e) =>{
                    sessionStorage.setItem('reserr','Employee '+this.employee.emp_name+' not updated')
                    this.router.navigate(['viewemployee'])
                  }
  })
}
getdeptbycompid(cid : Company)
{
  this.deptserv.getDepartmentByCompId(cid.comp_id).subscribe(data=>this.deptlist=data)
}
}
