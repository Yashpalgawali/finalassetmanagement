import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-assignedassets',
  templateUrl: './assignedassets.component.html',
  styleUrls: ['./assignedassets.component.css']
})
export class AssignedassetsComponent {
response : any
reserr   : any
  constructor(private empserv : EmployeeService,private router : Router) { }

  assigned_assets : any 
  assign_hist : AssetAssignHistory[] = []
  ngOnInit(): void {
    this.empserv.getAssignedAssets().subscribe(data=>this.assigned_assets=data)
  }

  editemployeebyid(eid : any)
  {
    alert('employee ID = '+eid)
  }

  viewemployeehistbyid(eid :any)
  {
    this.router.navigate(['viewassetassignhist',eid])
  }
}
