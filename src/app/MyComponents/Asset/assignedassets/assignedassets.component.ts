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

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',
      responsive:true,
    }

    this.empserv.getAssignedAssets().subscribe(
                                            data=>
                                            {
                                              if(sessionStorage.getItem('response')!=null)
                                                  { 
                                                    setTimeout(() => {
                                                      this.response=sessionStorage.getItem('response')
                                                      sessionStorage.removeItem('response')
                                                    }, 500);
                                                  }
                                                  if(sessionStorage.getItem('reserr')!=null)
                                                  {
                                                    this.reserr=sessionStorage.getItem('reserr')
                                                      setTimeout(() => {  
                                                        sessionStorage.removeItem('reserr')
                                                      }, 500);
                                                  }
                                              this.assigned_assets=data
                                              this.dtTrigger.next(null)
                                            }) 
  }

  viewemployeehistbyid(eid :any)
  {
    this.router.navigate(['assetassignhist',eid])
  }

  exportAssignedAssetsReportToExcel()
  {
    this.assignassetserv.exportAssignedAssetsToExcel().subscribe((response : any)=>{
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Assigned Assets.xlsx';
      link.click();
       
    });
  }
}
 