import { Component } from '@angular/core';
import { data } from 'jquery';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';

import { Company } from 'src/Models/Company';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';
import { CompanyService } from 'src/app/Services/company.service';
import { DepartmentService } from 'src/app/Services/department.service';
import { DesignationService } from 'src/app/Services/designation.service';

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
deptlist   : Department[] = [];

constructor(private compserv : CompanyService,private desigserv : DesignationService,private deptserv : DepartmentService) { }

// dropdownSettings:IDropdownSettings = {};
ngOnInit(): void {
        this.compserv.getAllCompanies().subscribe(data=>this.clist=data)
        this.desigserv.getAllDesignations().subscribe(data=>{this.desiglist=data})

        // this.dropdownSettings = {
        //   singleSelection: false,
        //   idField   : 'item_id',
        //   textField : 'item_text',
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   itemsShowLimit: 3,
        //   allowSearchFilter: true
        // };
  }

  getdeptbycompid(comp : Company)
  {
    this.deptserv.getDepartmentByCompId(comp.comp_id).subscribe(data=>this.deptlist=data)
  }
}
