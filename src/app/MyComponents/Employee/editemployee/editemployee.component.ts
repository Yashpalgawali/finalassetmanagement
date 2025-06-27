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
    dept_id !: number
    selectedCompany : any
    selectedDepartment : any
    assigned_assets !: string
    bindlables : any
    selectedDesignation : any
    matchedAssets : any
    isDisabled : boolean = false
    ngOnInit(): void {
   
    this.emp_id = this.route.snapshot.params['id']
    
    this.empserv.getEmployeeById(this.emp_id).subscribe({
      next:(data)=> {
       if('errorCode' in data) {
            sessionStorage.setItem('reserr',data.errorMessage)
            this.router.navigate(['employee/viewemployees'])
       }
       else { 
        this.employee = data
         console.log('FOUND Employee ',this.employee)
        this.selectedCompany = this.employee.department.company
        this.selectedDepartment = this.employee.department
        this.assigned_assets = this.employee.assigned_assets
        
        this.desigserv.getAllDesignations().subscribe({
          next:(data) =>
            {
              this.desiglist=data
              this.desiglist.map(desig => {
                  if(desig.desig_id==this.employee.designation.desig_id)
                    this.selectedDesignation=desig
                }
              )
            }
        })
        
        this.compserv.getAllCompanies().subscribe({
          next:(data)=> {
             this.clist=data
            
             this.clist.map(company => {
              if(company.comp_id==this.selectedCompany.comp_id) {
                this.selectedCompany = company               
                this.getdeptbycompid(company)
               
              }
             })
          }
        })
        this.assetserv.getAllAssets().subscribe({
                                                  next:(data)=>
                                                  {
                                                   this.assetlist = data.filter(ast => ast.quantity>0).map(e=>{
                                                      e.asset_name = `${e.asset_name} (${e.model_number})`
                                                      return e
                                                    })
                                                  }
                                              })
                                            }
      },
      error:(e) => {
        
        sessionStorage.setItem('reserr', e.error.errorMessage )
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

 onSubmit() {
  this.isDisabled= true
  setTimeout(() => {
    this.isDisabled= false
  }, 3000);
  console.log('EMPloyee ',this.employee)

  this.employee.designation=this.selectedDesignation
  this.employee.department=this.selectedDepartment
   console.log('After Changing EMPloyee ',this.employee)

  try{
      this.empserv.updateEmployee(this.employee).subscribe({
          next : (data) => {
              if('statusCode' in data) {
                sessionStorage.setItem('response',data.statusMsg)
                this.router.navigate(['/employee/viewemployees'])
              }
              if('errorCode' in data) {
                console.log(data.errorMessage)
                alert('Not updated')
                sessionStorage.setItem('reserr',data.errorMessage)
                this.router.navigate(['/employee/viewemployees'])
              }
          }
        })
  }
  catch(err) {

  }
  finally{
      this.isDisabled = false;
  }
}

  getdeptbycompid(cid : Company)
  {
    this.deptserv.getDepartmentByCompId(cid.comp_id).subscribe({
      next : (data) => {
          this.deptlist = data
      },
      error:(error) => {
          this.deptlist = []
          alert('No departments found')
      },
    })
  }
}
