import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AssetAssignHistory } from 'src/Models/AssetAssignHistory';
import { AssignedAssets } from 'src/Models/AssignedAssets';
import { AssignedAssetService } from 'src/app/Services/assigned-asset.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-assignedassets',
  templateUrl: './assignedassets.component.html',
  styleUrls: ['./assignedassets.component.css']
})
export class AssignedassetsComponent implements OnInit{

response : any
reserr   : any
  constructor(private empserv : EmployeeService,private router : Router,private assignassetserv : AssignedAssetService) { }

  assigned_assets : AssignedAssets[] = []
  assign_hist : AssetAssignHistory[] = []

  dtOptions : DataTables.Settings={}  
  dtTrigger : Subject<any> = new Subject<any>

  ngOnInit(): void {
    this.dtOptions={
      pagingType : 'full_numbers',
      responsive:true
    }
    
    this.empserv.getAssignedAssets().subscribe(
                                            data=>
                                            {
                                              if(sessionStorage.getItem('response')!=null){
                                                    this.response=sessionStorage.getItem('response')
                                                    setTimeout(() => {
                                                      sessionStorage.removeItem('response')
                                                      this.response=""
                                                    }, 3000);
                                                  }
                                                  if(sessionStorage.getItem('reserr')!=null)
                                                  {
                                                    this.reserr=sessionStorage.getItem('reserr')
                                                      setTimeout(() => {  
                                                        sessionStorage.removeItem('reserr')
                                                        this.reserr=""
                                                      }, 3000);
                                                  }
                                              this.assigned_assets=data
                                              this.dtTrigger.next(null)
                                            }) 
  }

  viewemployeehistbyid(empid : any)
  {
    this.router.navigate(['assetassignhist',empid])
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
 