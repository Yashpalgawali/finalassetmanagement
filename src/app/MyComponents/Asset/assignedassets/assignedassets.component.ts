import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
import { AssignedAssetService } from 'src/app/Services/assigned-asset.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-assignedassets',
  templateUrl: './assignedassets.component.html',
  styleUrls: ['./assignedassets.component.css']
})
export class AssignedassetsComponent {
response : any
reserr   : any
  constructor(private empserv : EmployeeService,private router : Router,private assignassetserv : AssignedAssetService) { }

  assigned_assets : any 
  assign_hist : AssetAssignHistory[] = []

  dtOptions : DataTables.Settings={}  
  dtTrigger : Subject<any> = new Subject<any>

  resserr : any

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers'
    }
    this.empserv.getAssignedAssets().subscribe(
                                            data=>
                                            {
                                              this.assigned_assets=data
                                              if(sessionStorage.getItem('reserr')!=null)
                                              {
                                                setTimeout(() => {
                                                  this.reserr = sessionStorage.getItem('resserr')
                                                }, 3000);
                                              }
                                              this.dtTrigger.next(null)
                                            }) 
  }

  editemployeebyid(eid : any)
  {
    alert('employee ID = '+eid)
  }

  viewemployeehistbyid(eid :any)
  {
    this.router.navigate(['assetassignhist',eid])
  }

  exportAssignedAssetsReportToExcel()
  {
    alert()
    this.assignassetserv.exportAssignedAssetsToExcel();
  }
}
 